
import React from 'react';
import { BodyPart, Movement } from '../types';

interface MuscleSelectorProps {
  bodyParts: BodyPart[];
  selectedIds: Set<string>;
  onToggle: (movementId: string) => void;
}

const MovementItem: React.FC<{ movement: Movement; isSelected: boolean; onToggle: (id: string) => void }> = ({ movement, isSelected, onToggle }) => (
  <li className="border-b border-gray-700/50 last:border-b-0">
    <label
      htmlFor={movement.id}
      className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-800/70 transition-colors duration-200"
    >
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <input
          id={movement.id}
          type="checkbox"
          className="h-5 w-5 rounded border-gray-600 bg-gray-700 text-blue-500 focus:ring-2 focus:ring-blue-500/50 transition"
          checked={isSelected}
          onChange={() => onToggle(movement.id)}
        />
        <span className="text-gray-300">{movement.englishName}</span>
      </div>
      <span className="text-lg text-gray-100 font-medium text-right">{movement.hebrewName}</span>
    </label>
  </li>
);

const MuscleSelector: React.FC<MuscleSelectorProps> = ({ bodyParts, selectedIds, onToggle }) => {
  return (
    <main className="max-w-5xl mx-auto px-4 pb-8">
      <div className="space-y-10">
        {bodyParts.map((part) => (
          <section key={part.id} aria-labelledby={`${part.id}-heading`}>
            <div className="border-b-2 border-blue-500 pb-2 mb-4">
              <h2 id={`${part.id}-heading`} className="text-2xl font-bold text-right text-white">
                {part.hebrewName} <span className="text-lg text-gray-400 font-normal">/ {part.englishName}</span>
              </h2>
            </div>
            <ul className="bg-gray-800/50 rounded-lg shadow-md overflow-hidden">
              {part.movements.map((movement) => (
                <MovementItem
                  key={movement.id}
                  movement={movement}
                  isSelected={selectedIds.has(movement.id)}
                  onToggle={onToggle}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  );
};

export default MuscleSelector;
