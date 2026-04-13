import type { ChemicalFamily } from '../types';
import { familyColors } from '../data/molecules';
import { Check, X } from 'lucide-react';

interface AnswerButtonsProps {
  families: ChemicalFamily[];
  correctAnswer: ChemicalFamily;
  showAnswer: boolean;
  onAnswer: (family: ChemicalFamily) => void;
  disabled: boolean;
}

export function AnswerButtons({ families, correctAnswer, showAnswer, onAnswer, disabled }: AnswerButtonsProps) {
  const getButtonClass = (family: ChemicalFamily) => {
    const baseClass = "answer-btn w-full p-4 rounded-xl border-2 font-semibold text-lg transition-all duration-200 flex items-center justify-between";
    
    if (!showAnswer) {
      return `${baseClass} bg-slate-800/50 border-slate-600 text-white hover:bg-slate-700 hover:border-slate-500 hover:scale-[1.02]`;
    }
    
    if (family === correctAnswer) {
      return `${baseClass} correct text-white`;
    }
    
    return `${baseClass} bg-slate-800/30 border-slate-700 text-slate-500 opacity-50`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {families.map((family) => (
        <button
          key={family}
          onClick={() => onAnswer(family)}
          disabled={disabled}
          className={getButtonClass(family)}
        >
          <span 
            className="px-3 py-1 rounded-lg text-sm"
            style={{ backgroundColor: `${familyColors[family]}30`, color: familyColors[family] }}
          >
            {family}
          </span>
          
          {showAnswer && (
            family === correctAnswer ? 
              <Check className="w-5 h-5 text-white" /> : 
              <X className="w-5 h-5 text-slate-500" />
          )}
        </button>
      ))}
    </div>
  );
}
