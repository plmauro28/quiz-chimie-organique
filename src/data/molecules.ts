import type { Molecule, ChemicalFamily } from '../types';

export const molecules: Molecule[] = [
  { id: 'methane', name: 'Méthane', formula: 'CH₄', formulaDeveloppee: 'CH₄', formulaSquelettique: 'CH₄', family: 'Alcane', functionalGroup: '' },
  { id: 'ethane', name: 'Éthane', formula: 'C₂H₆', formulaDeveloppee: 'CH₃-CH₃', formulaSquelettique: 'CH₃CH₃', family: 'Alcane', functionalGroup: '' },
  { id: 'propane', name: 'Propane', formula: 'C₃H₈', formulaDeveloppee: 'CH₃-CH₂-CH₃', formulaSquelettique: 'CH₃CH₂CH₃', family: 'Alcane', functionalGroup: '' },
  { id: 'butane', name: 'Butane', formula: 'C₄H₁₀', formulaDeveloppee: 'CH₃-CH₂-CH₂-CH₃', formulaSquelettique: 'CH₃(CH₂)₂CH₃', family: 'Alcane', functionalGroup: '' },
  { id: 'pentane', name: 'Pentane', formula: 'C₅H₁₂', formulaDeveloppee: 'CH₃-(CH₂)₃-CH₃', formulaSquelettique: 'CH₃(CH₂)₃CH₃', family: 'Alcane', functionalGroup: '' },
  
  { id: 'ethene', name: 'Éthène', formula: 'C₂H₄', formulaDeveloppee: 'CH₂=CH₂', formulaSquelettique: 'CH₂=CH₂', family: 'Alcène', functionalGroup: '=' },
  { id: 'propene', name: 'Propène', formula: 'C₃H₆', formulaDeveloppee: 'CH₂=CH-CH₃', formulaSquelettique: 'CH₂=CHCH₃', family: 'Alcène', functionalGroup: '=' },
  { id: 'butene', name: 'But-1-ène', formula: 'C₄H₈', formulaDeveloppee: 'CH₂=CH-CH₂-CH₃', formulaSquelettique: 'CH₂=CHCH₂CH₃', family: 'Alcène', functionalGroup: '=' },
  { id: 'isobutene', name: 'Isobutène', formula: 'C₄H₈', formulaDeveloppee: 'CH₂=C(CH₃)₂', formulaSquelettique: 'CH₂=C(CH₃)₂', family: 'Alcène', functionalGroup: '=' },

  { id: 'methanol', name: 'Méthanol', formula: 'CH₃OH', formulaDeveloppee: 'CH₃-OH', formulaSquelettique: 'CH₃OH', family: 'Alcool', functionalGroup: '-OH' },
  { id: 'ethanol', name: 'Éthanol', formula: 'C₂H₅OH', formulaDeveloppee: 'CH₃-CH₂-OH', formulaSquelettique: 'CH₃CH₂OH', family: 'Alcool', functionalGroup: '-OH' },
  { id: 'propanol', name: 'Propan-1-ol', formula: 'C₃H₇OH', formulaDeveloppee: 'CH₃-CH₂-CH₂-OH', formulaSquelettique: 'CH₃CH₂CH₂OH', family: 'Alcool', functionalGroup: '-OH' },
  { id: 'isopropanol', name: 'Propan-2-ol', formula: 'C₃H₇OH', formulaDeveloppee: 'CH₃-CH(OH)-CH₃', formulaSquelettique: 'CH₃CH(OH)CH₃', family: 'Alcool', functionalGroup: '-OH' },
  { id: 'butanol', name: 'Butan-1-ol', formula: 'C₄H₉OH', formulaDeveloppee: 'CH₃-(CH₂)₂-CH₂-OH', formulaSquelettique: 'CH₃(CH₂)₂CH₂OH', family: 'Alcool', functionalGroup: '-OH' },

  { id: 'formaldehyde', name: 'Méthanal', formula: 'CH₂O', formulaDeveloppee: 'H-CHO', formulaSquelettique: 'HCHO', family: 'Aldéhyde', functionalGroup: '-CHO' },
  { id: 'acetaldehyde', name: 'Éthanal', formula: 'C₂H₄O', formulaDeveloppee: 'CH₃-CHO', formulaSquelettique: 'CH₃CHO', family: 'Aldéhyde', functionalGroup: '-CHO' },
  { id: 'propionaldehyde', name: 'Propanal', formula: 'C₃H₆O', formulaDeveloppee: 'CH₃-CH₂-CHO', formulaSquelettique: 'CH₃CH₂CHO', family: 'Aldéhyde', functionalGroup: '-CHO' },
  { id: 'butyraldehyde', name: 'Butanal', formula: 'C₄H₈O', formulaDeveloppee: 'CH₃-CH₂-CH₂-CHO', formulaSquelettique: 'CH₃CH₂CH₂CHO', family: 'Aldéhyde', functionalGroup: '-CHO' },

  { id: 'acetone', name: 'Acétone', formula: 'C₃H₆O', formulaDeveloppee: 'CH₃-CO-CH₃', formulaSquelettique: 'CH₃COCH₃', family: 'Cétone', functionalGroup: 'C=O' },
  { id: 'butanone', name: 'Butan-2-one', formula: 'C₄H₈O', formulaDeveloppee: 'CH₃-CO-CH₂-CH₃', formulaSquelettique: 'CH₃COCH₂CH₃', family: 'Cétone', functionalGroup: 'C=O' },
  { id: 'pentanone', name: 'Pentan-2-one', formula: 'C₅H₁₀O', formulaDeveloppee: 'CH₃-CO-CH₂-CH₂-CH₃', formulaSquelettique: 'CH₃CO(CH₂)₂CH₃', family: 'Cétone', functionalGroup: 'C=O' },

  { id: 'formicacid', name: 'Acide formique', formula: 'HCOOH', formulaDeveloppee: 'H-COOH', formulaSquelettique: 'HCOOH', family: 'Acide carboxylique', functionalGroup: '-COOH' },
  { id: 'aceticacid', name: 'Acide acétique', formula: 'C₂H₄O₂', formulaDeveloppee: 'CH₃-COOH', formulaSquelettique: 'CH₃COOH', family: 'Acide carboxylique', functionalGroup: '-COOH' },
  { id: 'propionicacid', name: 'Acide propionique', formula: 'C₃H₆O₂', formulaDeveloppee: 'CH₃-CH₂-COOH', formulaSquelettique: 'CH₃CH₂COOH', family: 'Acide carboxylique', functionalGroup: '-COOH' },
  { id: 'butyricacid', name: 'Acide butyrique', formula: 'C₄H₈O₂', formulaDeveloppee: 'CH₃-(CH₂)₂-COOH', formulaSquelettique: 'CH₃(CH₂)₂COOH', family: 'Acide carboxylique', functionalGroup: '-COOH' },
  { id: 'benzoicacid', name: 'Acide benzoïque', formula: 'C₇H₆O₂', formulaDeveloppee: 'C₆H₅-COOH', formulaSquelettique: 'C₆H₅COOH', family: 'Acide carboxylique', functionalGroup: '-COOH' },

  { id: 'methylformate', name: 'Méthanoate de méthyle', formula: 'C₂H₄O₂', formulaDeveloppee: 'H-COO-CH₃', formulaSquelettique: 'HCOOCH₃', family: 'Ester', functionalGroup: '-COO-' },
  { id: 'ethylacetate', name: 'Acétate d\'éthyle', formula: 'C₄H₈O₂', formulaDeveloppee: 'CH₃-COO-CH₂-CH₃', formulaSquelettique: 'CH₃COOCH₂CH₃', family: 'Ester', functionalGroup: '-COO-' },
  { id: 'methylpropionate', name: 'Propanoate de méthyle', formula: 'C₄H₈O₂', formulaDeveloppee: 'CH₃-CH₂-COO-CH₃', formulaSquelettique: 'CH₃CH₂COOCH₃', family: 'Ester', functionalGroup: '-COO-' },
  { id: 'ethylbutyrate', name: 'Butanoate d\'éthyle', formula: 'C₆H₁₂O₂', formulaDeveloppee: 'CH₃-(CH₂)₂-COO-CH₂-CH₃', formulaSquelettique: 'CH₃(CH₂)₂COOCH₂CH₃', family: 'Ester', functionalGroup: '-COO-' },

  { id: 'methylamine', name: 'Méthylamine', formula: 'CH₃NH₂', formulaDeveloppee: 'CH₃-NH₂', formulaSquelettique: 'CH₃NH₂', family: 'Amine', functionalGroup: '-NH₂' },
  { id: 'ethylamine', name: 'Éthylamine', formula: 'C₂H₇N', formulaDeveloppee: 'CH₃-CH₂-NH₂', formulaSquelettique: 'CH₃CH₂NH₂', family: 'Amine', functionalGroup: '-NH₂' },
  { id: 'propylamine', name: 'Propylamine', formula: 'C₃H₉N', formulaDeveloppee: 'CH₃-CH₂-CH₂-NH₂', formulaSquelettique: 'CH₃CH₂CH₂NH₂', family: 'Amine', functionalGroup: '-NH₂' },
  { id: 'triethylamine', name: 'Triéthylamine', formula: 'C₆H₁₅N', formulaDeveloppee: '(CH₃-CH₂)₃N', formulaSquelettique: '(CH₃CH₂)₃N', family: 'Amine', functionalGroup: '-N-' },
  { id: 'aniline', name: 'Aniline', formula: 'C₆H₇N', formulaDeveloppee: 'C₆H₅-NH₂', formulaSquelettique: 'C₆H₅NH₂', family: 'Amine', functionalGroup: '-NH₂' },

  { id: 'formamide', name: 'Méthanamide', formula: 'CH₃NO', formulaDeveloppee: 'H-CONH₂', formulaSquelettique: 'HCONH₂', family: 'Amide', functionalGroup: '-CONH₂' },
  { id: 'acetamide', name: 'Éthanamide', formula: 'C₂H₅NO', formulaDeveloppee: 'CH₃-CONH₂', formulaSquelettique: 'CH₃CONH₂', family: 'Amide', functionalGroup: '-CONH₂' },
  { id: 'propionamide', name: 'Propanamide', formula: 'C₃H₇NO', formulaDeveloppee: 'CH₃-CH₂-CONH₂', formulaSquelettique: 'CH₃CH₂CONH₂', family: 'Amide', functionalGroup: '-CONH₂' },
  { id: 'butyramide', name: 'Butanamide', formula: 'C₄H₉NO', formulaDeveloppee: 'CH₃-(CH₂)₂-CONH₂', formulaSquelettique: 'CH₃(CH₂)₂CONH₂', family: 'Amide', functionalGroup: '-CONH₂' },
  { id: 'benzamide', name: 'Benzamide', formula: 'C₇H₇NO', formulaDeveloppee: 'C₆H₅-CONH₂', formulaSquelettique: 'C₆H₅CONH₂', family: 'Amide', functionalGroup: '-CONH₂' },

  { id: 'dimethylether', name: 'Éther diméthylique', formula: 'C₂H₆O', formulaDeveloppee: 'CH₃-O-CH₃', formulaSquelettique: 'CH₃OCH₃', family: 'Éther', functionalGroup: '-O-' },
  { id: 'diethylether', name: 'Éther diéthylique', formula: 'C₄H₁₀O', formulaDeveloppee: 'CH₃-CH₂-O-CH₂-CH₃', formulaSquelettique: 'CH₃CH₂OCH₂CH₃', family: 'Éther', functionalGroup: '-O-' },
  { id: 'ethylmethylether', name: 'Éther éthylique', formula: 'C₃H₈O', formulaDeveloppee: 'CH₃-CH₂-O-CH₃', formulaSquelettique: 'CH₃CH₂OCH₃', family: 'Éther', functionalGroup: '-O-' },
  { id: 'thf', name: 'THF', formula: 'C₄H₈O', formulaDeveloppee: '(CH₂)₄-O', formulaSquelettique: '(CH₂)₄O', family: 'Éther', functionalGroup: '-O-' },
];

export const families: ChemicalFamily[] = [
  'Alcane', 'Alcène', 'Alcool', 'Aldéhyde', 'Cétone',
  'Acide carboxylique', 'Ester', 'Amine', 'Amide', 'Éther'
];

export const familyColors: Record<ChemicalFamily, string> = {
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
