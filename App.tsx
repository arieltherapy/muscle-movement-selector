import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import MuscleSelector from './components/MuscleSelector';
import OppositeMovementsView from './components/OppositeMovementsView';
import { MUSCLE_DATA, LOCAL_STORAGE_KEY } from './constants';
import { BodyPart, Movement } from './types';
import { oppositeMovementsMap } from './oppositeMovementsMap';


type View = 'selection' | 'opposites';

const App: React.FC = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isSaving, setIsSaving] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [view, setView] = useState<View>('selection');

  useEffect(() => {
    try {
      const savedItems = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedItems) {
        const parsedItems: string[] = JSON.parse(savedItems);
        setSelectedIds(new Set(parsedItems));
      }
    } catch (error) {
      console.error("Failed to load selected movements from localStorage:", error);
    }
  }, []);

  const handleToggle = useCallback((movementId: string) => {
    setSelectedIds(prevIds => {
      const newIds = new Set(prevIds);
      if (newIds.has(movementId)) {
        newIds.delete(movementId);
      } else {
        newIds.add(movementId);
      }
      return newIds;
    });
  }, []);
  
  const handleSave = useCallback(() => {
    setIsSaving(true);
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        try {
          const itemsToSave = Array.from(selectedIds);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(itemsToSave));
        } catch (error) {
          console.error("Failed to save selected movements to localStorage:", error);
          alert("Error: Could not save selections.");
        } finally {
          setIsSaving(false);
          resolve();
        }
      }, 500);
    });
  }, [selectedIds]);

  const handleContinue = useCallback(async () => {
    await handleSave();
    setView('opposites');
  }, [handleSave]);

  const handleReset = useCallback(() => {
    if (window.confirm("האם אתה בטוח שברצונך לאפס את כל הבחירות?")) {
      setSelectedIds(new Set());
      setView('selection');
      try {
        localStorage.removeItem(LOCAL_STORAGE_KEY);
      } catch (error) {
        console.error("Failed to clear localStorage:", error);
      }
    }
  }, []);
  
  const movementMap = React.useMemo(() => {
    const map = new Map<string, { movement: Movement; bodyPart: BodyPart }>();
    MUSCLE_DATA.forEach(part => {
      part.movements.forEach(mov => {
        map.set(mov.id, { movement: mov, bodyPart: part });
      });
    });
    return map;
  }, []);

  const handleCopySelection = useCallback(() => {
    if (selectedIds.size === 0) return;

    const groupedByBodyPart = new Map<string, { hebrewName: string; englishName: string; movements: Movement[] }>();
    
    selectedIds.forEach(id => {
      const item = movementMap.get(id);
      if (item) {
        const { movement, bodyPart } = item;
        if (!groupedByBodyPart.has(bodyPart.id)) {
          groupedByBodyPart.set(bodyPart.id, {
            hebrewName: bodyPart.hebrewName,
            englishName: bodyPart.englishName,
            movements: []
          });
        }
        groupedByBodyPart.get(bodyPart.id)!.movements.push(movement);
      }
    });

    let output = '';
    MUSCLE_DATA.forEach(part => {
      const selectedGroup = groupedByBodyPart.get(part.id);
      if (selectedGroup && selectedGroup.movements.length > 0) {
        output += `${selectedGroup.hebrewName} / ${selectedGroup.englishName}\n`;
        selectedGroup.movements.forEach(mov => {
          output += `- ${mov.hebrewName} / ${mov.englishName}\n`;
        });
        output += '\n';
      }
    });

    navigator.clipboard.writeText(output.trim()).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      alert("העתקה נכשלה");
    });
  }, [selectedIds, movementMap]);

  const handleCopyOpposites = useCallback(() => {
    if (selectedIds.size === 0) return;
    
    let output = 'רשימת תנועות ובדיקות נגדיות:\n\n';
    
    const groupedByBodyPart = new Map<string, { bodyPart: BodyPart; movements: { selected: Movement; opposite?: Movement }[] }>();

    selectedIds.forEach(id => {
      const item = movementMap.get(id);
      if (item) {
        const { movement, bodyPart } = item;
        if (!groupedByBodyPart.has(bodyPart.id)) {
          groupedByBodyPart.set(bodyPart.id, { bodyPart, movements: [] });
        }
        const oppositeId = oppositeMovementsMap.get(id);
        const opposite = oppositeId ? movementMap.get(oppositeId)?.movement : undefined;
        groupedByBodyPart.get(bodyPart.id)!.movements.push({ selected: movement, opposite });
      }
    });

    MUSCLE_DATA.forEach(part => {
      const group = groupedByBodyPart.get(part.id);
      if(group) {
        output += `${group.bodyPart.hebrewName} / ${group.bodyPart.englishName}\n`;
        group.movements.forEach(({selected, opposite}) => {
           output += `- ${selected.hebrewName} -> ${opposite ? opposite.hebrewName : 'אין'}\n`;
        });
        output += '\n';
      }
    });

    navigator.clipboard.writeText(output.trim()).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }).catch(err => {
      console.error("Failed to copy text: ", err);
      alert("העתקה נכשלה");
    });
  }, [selectedIds, movementMap]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100" dir="rtl">
      <Header
        onSave={view === 'selection' ? handleContinue : () => alert('השלב הבא עדיין בפיתוח.')}
        onReset={handleReset}
        onCopy={view === 'selection' ? handleCopySelection : handleCopyOpposites}
        selectionCount={selectedIds.size}
        isSaving={isSaving}
        isCopied={isCopied}
        saveText={view === 'selection' ? `המשך תהליך (${selectedIds.size})` : 'שמור להמשך'}
        resetText={view === 'selection' ? 'אפס הכל' : 'התחל מחדש'}
        isSaveDisabled={view === 'opposites'}
      />
      {view === 'selection' ? (
        <MuscleSelector
          bodyParts={MUSCLE_DATA}
          selectedIds={selectedIds}
          onToggle={handleToggle}
        />
      ) : (
        <OppositeMovementsView
          bodyParts={MUSCLE_DATA}
          selectedIds={selectedIds}
        />
      )}
    </div>
  );
};

export default App;