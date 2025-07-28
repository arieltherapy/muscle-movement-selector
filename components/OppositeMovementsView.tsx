import React from 'react';
import { BodyPart, Movement } from '../types';
import { oppositeMovementsMap } from '../oppositeMovementsMap';

interface OppositeMovementsViewProps {
  selectedIds: Set<string>;
  bodyParts: BodyPart[];
}

const OppositeMovementsView: React.FC<OppositeMovementsViewProps> = ({ selectedIds, bodyParts }) => {
  const movementMap = React.useMemo(() => {
    const map = new Map<string, { movement: Movement; bodyPart: BodyPart }>();
    bodyParts.forEach(part => {
      part.movements.forEach(mov => {
        map.set(mov.id, { movement: mov, bodyPart: part });
      });
    });
    return map;
  }, [bodyParts]);

  const getOppositeMovement = React.useCallback((movementId: string): Movement | undefined => {
    const oppositeId = oppositeMovementsMap.get(movementId);
    return oppositeId ? movementMap.get(oppositeId)?.movement : undefined;
  }, [movementMap]);

  const orderedGroups = React.useMemo(() => {
    const groupedByBodyPart = new Map<string, { bodyPart: BodyPart; movements: { selected: Movement; opposite?: Movement }[] }>();

    selectedIds.forEach(id => {
      const item = movementMap.get(id);
      if (item) {
        const { movement, bodyPart } = item;
        if (!groupedByBodyPart.has(bodyPart.id)) {
          groupedByBodyPart.set(bodyPart.id, {
            bodyPart: bodyPart,
            movements: []
          });
        }
        groupedByBodyPart.get(bodyPart.id)!.movements.push({
          selected: movement,
          opposite: getOppositeMovement(movement.id)
        });
      }
    });

    return bodyParts
      .map(part => groupedByBodyPart.get(part.id))
      .filter((group): group is NonNullable<typeof group> => !!group);
  }, [selectedIds, bodyParts, movementMap, getOppositeMovement]);

  if (orderedGroups.length === 0) {
    return (
        <main className="max-w-5xl mx-auto px-4 pb-8 text-center">
            <h2 className="text-xl text-gray-400 mt-10">לא נבחרו תנועות.</h2>
            <p className="text-gray-500">יש לחזור אחורה ולבחור תנועות כדי לראות את התנועות הנגדיות.</p>
        </main>
    );
  }

  return (
    <main className="max-w-5xl mx-auto px-4 pb-8">
      <div className="space-y-10">
        {orderedGroups.map(({ bodyPart, movements }) => (
          <section key={bodyPart.id} aria-labelledby={`${bodyPart.id}-heading`}>
            <div className="border-b-2 border-green-500 pb-2 mb-4">
              <h2 id={`${bodyPart.id}-heading`} className="text-2xl font-bold text-right text-white">
                {bodyPart.hebrewName} <span className="text-lg text-gray-400 font-normal">/ {bodyPart.englishName}</span>
              </h2>
            </div>
            <ul className="bg-gray-800/50 rounded-lg shadow-md overflow-hidden divide-y divide-gray-700/50">
              {movements.map(({ selected, opposite }) => (
                <li key={selected.id} className="p-4 flex justify-between items-center text-right">
                  <div className="flex-1">
                    <p className="text-gray-300">{selected.englishName}</p>
                    <p className="text-lg text-gray-100 font-medium">{selected.hebrewName}</p>
                  </div>
                  <div className="text-3xl text-green-500 mx-4 font-light">&#x2190;</div>
                  <div className="flex-1 text-left">
                    {opposite ? (
                      <>
                        <p className="text-gray-300">{opposite.englishName}</p>
                        <p className="text-lg text-gray-100 font-medium">{opposite.hebrewName}</p>
                      </>
                    ) : (
                      <p className="text-gray-500 italic">אין תנועה נגדית</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default OppositeMovementsView;