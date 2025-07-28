import React from 'react';

interface HeaderProps {
  onSave: () => void;
  onReset: () => void;
  onCopy: () => void;
  selectionCount: number;
  isSaving: boolean;
  isCopied: boolean;
  saveText: string;
  resetText: string;
  isSaveDisabled?: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSave, onReset, onCopy, selectionCount, isSaving, isCopied, saveText, resetText, isSaveDisabled = false }) => {
  return (
    <header className="bg-gray-800/80 backdrop-blur-sm sticky top-0 z-10 p-4 shadow-lg mb-8">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white">בוחן תנועות שרירים</h1>
          <p className="text-sm text-gray-400">Muscle Movement Selector</p>
        </div>
        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            onClick={onCopy}
            className="px-3 py-2 md:px-4 text-sm font-semibold text-white bg-green-600 hover:bg-green-500 rounded-lg shadow-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectionCount === 0 || isCopied}
          >
            {isCopied ? 'הועתק!' : 'העתק בחירה'}
          </button>
          <button
            onClick={onReset}
            className="px-3 py-2 md:px-4 text-sm font-semibold text-white bg-gray-600 hover:bg-gray-500 rounded-lg shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={selectionCount === 0}
          >
            {resetText}
          </button>
          <button
            onClick={onSave}
            className="px-3 py-2 md:px-4 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
            disabled={selectionCount === 0 || isSaving || isSaveDisabled}
          >
            {isSaving ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                שומר...
              </>
            ) : (
             saveText
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;