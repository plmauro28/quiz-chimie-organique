import type { Molecule } from '../types';
import { familyColors } from '../data/molecules';

interface MoleculeDisplayProps {
  molecule: Molecule;
  displayType: 'formule' | 'developpee' | 'squelettique';
  showFunctionalGroup: boolean;
  questionType: 'formule' | 'structure' | 'nom';
}

export function MoleculeDisplay({ molecule, displayType, showFunctionalGroup, questionType }: MoleculeDisplayProps) {
  const getDisplayContent = () => {
    switch (questionType) {
      case 'nom':
        return molecule.name;
      case 'formule':
      case 'structure':
      default:
        switch (displayType) {
          case 'formule':
            return molecule.formula;
          case 'developpee':
            return molecule.formulaDeveloppee;
          case 'squelettique':
            return molecule.formulaSquelettique;
          default:
            return molecule.formula;
        }
    }
  };

  const color = familyColors[molecule.family];

  return (
    <div className="glass-card rounded-2xl p-8 text-center transform hover:scale-[1.02] transition-transform duration-300">
      <div className="text-sm text-slate-400 mb-2 uppercase tracking-wider">
        {questionType === 'nom' ? 'Quelle est la famille de cette molécule ?' : 
         questionType === 'formule' ? 'Quelle est la famille de cette formule ?' :
         'Quelle est la famille de cette structure ?'}
      </div>
      
      <div className="molecule-display text-3xl md:text-4xl font-bold text-white py-6">
        {getDisplayContent()}
      </div>

      {showFunctionalGroup && (
        <div className="mt-4 inline-flex items-center gap-2">
          <span className="text-slate-400 text-sm">Groupe fonctionnel:</span>
          <span 
            className="px-3 py-1 rounded-full text-sm font-semibold"
            style={{ backgroundColor: `${color}30`, color: color }}
          >
            {molecule.functionalGroup || 'Aucun'}
          </span>
        </div>
      )}
    </div>
  );
}
