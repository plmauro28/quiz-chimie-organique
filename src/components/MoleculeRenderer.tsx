import type { ChemicalFamily } from '../types';
import { moleculeStructures } from '../data/structures';

interface MoleculeRendererProps {
  moleculeId: string;
  family: ChemicalFamily;
  width?: number;
  height?: number;
}

const familyColors: Record<ChemicalFamily, string> = {
  'Alcane': '#22c55e',
  'Alcène': '#3b82f6',
  'Alcool': '#f59e0b',
  'Aldéhyde': '#ec4899',
  'Cétone': '#8b5cf6',
  'Acide carboxylique': '#ef4444',
  'Ester': '#14b8a6',
  'Amine': '#06b6d4',
  'Amide': '#f97316',
  'Éther': '#84cc16',
};

const elementColors: Record<string, string> = {
  'C': '#374151',
  'O': '#dc2626',
  'N': '#2563eb',
  'H': '#9ca3af',
  'S': '#eab308',
  'Cl': '#22c55e',
  'Br': '#b45309',
  'F': '#a3e635',
};

const elementSizes: Record<string, number> = {
  'C': 18,
  'O': 16,
  'N': 16,
  'H': 10,
  'S': 18,
  'Cl': 17,
  'Br': 18,
  'F': 14,
};

export function MoleculeRenderer({ moleculeId, family, width = 200, height = 200 }: MoleculeRendererProps) {
  const structure = moleculeStructures[moleculeId];
  const color = familyColors[family];
  const scale = Math.min(width / 200, height / 200) * 0.9;

  if (!structure) {
    return (
      <svg width={width} height={height} viewBox="0 0 200 200" className="mx-auto">
        <circle cx="100" cy="100" r="80" fill={color} opacity="0.1" />
        <text x="100" y="105" textAnchor="middle" fill={color} fontSize="14" fontWeight="600">
          {moleculeId}
        </text>
      </svg>
    );
  }

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 200 200" 
      className="mx-auto"
      style={{ transform: `scale(${scale})`, transformOrigin: 'center' }}
    >
      <defs>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <linearGradient id="bondGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6b7280" />
          <stop offset="50%" stopColor="#9ca3af" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
      </defs>

      <circle cx="100" cy="100" r="90" fill={color} opacity="0.05" />

      {structure.bonds.map((bond, i) => {
        const from = structure.atoms[bond.from];
        const to = structure.atoms[bond.to];
        const angle = Math.atan2(to.y - from.y, to.x - from.x);
        const perpX = Math.sin(angle) * 3;
        const perpY = -Math.cos(angle) * 3;

        if (bond.order === 2) {
          return (
            <g key={i}>
              <line 
                x1={from.x + perpX} y1={from.y + perpY} 
                x2={to.x + perpX} y2={to.y + perpY}
                stroke="#6b7280" 
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line 
                x1={from.x - perpX} y1={from.y - perpY} 
                x2={to.x - perpX} y2={to.y - perpY}
                stroke="#6b7280" 
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          );
        }
        return (
          <line 
            key={i}
            x1={from.x} y1={from.y} 
            x2={to.x} y2={to.y}
            stroke="#6b7280" 
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}

      {structure.atoms.map((atom, i) => {
        const size = elementSizes[atom.element] || 14;
        const atomColor = elementColors[atom.element] || '#374151';
        
        if (atom.element === 'C') {
          return null;
        }

        return (
          <g key={i} filter="url(#glow)">
            <circle 
              cx={atom.x} 
              cy={atom.y} 
              r={size * 0.7}
              fill="white"
            />
            <text 
              x={atom.x} 
              y={atom.y + size * 0.25} 
              textAnchor="middle" 
              fill={atomColor}
              fontSize={size}
              fontWeight="700"
              fontFamily="system-ui, sans-serif"
            >
              {atom.element}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

export function getFamilyColor(family: ChemicalFamily): string {
  return familyColors[family] || '#6366f1';
}
