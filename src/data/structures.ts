export interface Atom {
  element: string;
  x: number;
  y: number;
}

export interface Bond {
  from: number;
  to: number;
  order: number;
}

export interface MoleculeStructure {
  atoms: Atom[];
  bonds: Bond[];
}

export const moleculeStructures: Record<string, MoleculeStructure> = {
  methane: {
    atoms: [{ element: 'C', x: 100, y: 100 }, { element: 'H', x: 50, y: 50 }, { element: 'H', x: 150, y: 50 }, { element: 'H', x: 50, y: 150 }, { element: 'H', x: 150, y: 150 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 0, to: 2, order: 1 }, { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }]
  },
  ethane: {
    atoms: [{ element: 'C', x: 70, y: 100 }, { element: 'C', x: 130, y: 100 }, { element: 'H', x: 30, y: 70 }, { element: 'H', x: 30, y: 130 }, { element: 'H', x: 70, y: 40 }, { element: 'H', x: 130, y: 40 }, { element: 'H', x: 130, y: 160 }, { element: 'H', x: 170, y: 70 }, { element: 'H', x: 170, y: 130 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 0, to: 2, order: 1 }, { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 1, to: 5, order: 1 }, { from: 1, to: 6, order: 1 }, { from: 1, to: 7, order: 1 }, { from: 1, to: 8, order: 1 }]
  },
  propane: {
    atoms: [{ element: 'C', x: 50, y: 100 }, { element: 'C', x: 100, y: 100 }, { element: 'C', x: 150, y: 100 }, { element: 'H', x: 20, y: 60 }, { element: 'H', x: 20, y: 140 }, { element: 'H', x: 50, y: 40 }, { element: 'H', x: 80, y: 60 }, { element: 'H', x: 100, y: 40 }, { element: 'H', x: 120, y: 60 }, { element: 'H', x: 150, y: 160 }, { element: 'H', x: 180, y: 60 }, { element: 'H', x: 180, y: 140 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 1 }, { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 1, to: 6, order: 1 }, { from: 1, to: 7, order: 1 }, { from: 2, to: 8, order: 1 }, { from: 2, to: 9, order: 1 }, { from: 2, to: 10, order: 1 }, { from: 2, to: 11, order: 1 }]
  },
  ethanol: {
    atoms: [{ element: 'C', x: 60, y: 120 }, { element: 'C', x: 110, y: 120 }, { element: 'O', x: 150, y: 80 }, { element: 'H', x: 30, y: 80 }, { element: 'H', x: 30, y: 160 }, { element: 'H', x: 60, y: 50 }, { element: 'H', x: 110, y: 50 }, { element: 'H', x: 110, y: 190 }, { element: 'H', x: 180, y: 50 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 1 }, { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 1, to: 6, order: 1 }, { from: 1, to: 7, order: 1 }, { from: 2, to: 8, order: 1 }]
  },
  aceticacid: {
    atoms: [{ element: 'C', x: 80, y: 100 }, { element: 'C', x: 130, y: 100 }, { element: 'O', x: 160, y: 60 }, { element: 'O', x: 160, y: 140 }, { element: 'H', x: 40, y: 70 }, { element: 'H', x: 40, y: 130 }, { element: 'H', x: 130, y: 40 }, { element: 'H', x: 190, y: 120 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 2 }, { from: 1, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 1, to: 6, order: 1 }, { from: 3, to: 7, order: 1 }]
  },
  acetaldehyde: {
    atoms: [{ element: 'C', x: 70, y: 100 }, { element: 'C', x: 120, y: 100 }, { element: 'O', x: 150, y: 70 }, { element: 'H', x: 30, y: 70 }, { element: 'H', x: 30, y: 130 }, { element: 'H', x: 120, y: 40 }, { element: 'H', x: 120, y: 170 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 2 }, { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 1, to: 5, order: 1 }, { from: 1, to: 6, order: 1 }]
  },
  acetone: {
    atoms: [{ element: 'C', x: 60, y: 100 }, { element: 'C', x: 100, y: 100 }, { element: 'C', x: 140, y: 100 }, { element: 'O', x: 100, y: 50 }, { element: 'H', x: 60, y: 40 }, { element: 'H', x: 20, y: 70 }, { element: 'H', x: 20, y: 130 }, { element: 'H', x: 140, y: 40 }, { element: 'H', x: 180, y: 70 }, { element: 'H', x: 180, y: 130 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 1 }, { from: 1, to: 3, order: 2 }, { from: 0, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 0, to: 6, order: 1 }, { from: 2, to: 7, order: 1 }, { from: 2, to: 8, order: 1 }, { from: 2, to: 9, order: 1 }]
  },
  ethylamine: {
    atoms: [{ element: 'C', x: 60, y: 100 }, { element: 'C', x: 110, y: 100 }, { element: 'N', x: 150, y: 100 }, { element: 'H', x: 30, y: 70 }, { element: 'H', x: 30, y: 130 }, { element: 'H', x: 60, y: 40 }, { element: 'H', x: 110, y: 40 }, { element: 'H', x: 110, y: 170 }, { element: 'H', x: 150, y: 70 }, { element: 'H', x: 150, y: 130 }, { element: 'H', x: 180, y: 100 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 1 }, { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 1, to: 6, order: 1 }, { from: 1, to: 7, order: 1 }, { from: 2, to: 8, order: 1 }, { from: 2, to: 9, order: 1 }, { from: 2, to: 10, order: 1 }]
  },
  methylformate: {
    atoms: [{ element: 'C', x: 60, y: 100 }, { element: 'O', x: 100, y: 70 }, { element: 'C', x: 140, y: 100 }, { element: 'O', x: 140, y: 150 }, { element: 'H', x: 30, y: 70 }, { element: 'H', x: 30, y: 130 }, { element: 'H', x: 180, y: 70 }, { element: 'H', x: 180, y: 130 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 1 }, { from: 2, to: 3, order: 2 }, { from: 0, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 2, to: 6, order: 1 }, { from: 2, to: 7, order: 1 }]
  },
  acetamide: {
    atoms: [{ element: 'C', x: 70, y: 100 }, { element: 'C', x: 120, y: 100 }, { element: 'O', x: 120, y: 50 }, { element: 'N', x: 120, y: 150 }, { element: 'H', x: 30, y: 70 }, { element: 'H', x: 30, y: 130 }, { element: 'H', x: 120, y: 40 }, { element: 'H', x: 150, y: 150 }, { element: 'H', x: 90, y: 150 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 2 }, { from: 1, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 2, to: 6, order: 1 }, { from: 3, to: 7, order: 1 }, { from: 3, to: 8, order: 1 }]
  },
  diethylether: {
    atoms: [{ element: 'C', x: 40, y: 100 }, { element: 'C', x: 80, y: 100 }, { element: 'O', x: 110, y: 100 }, { element: 'C', x: 140, y: 100 }, { element: 'C', x: 180, y: 100 }, { element: 'H', x: 40, y: 40 }, { element: 'H', x: 10, y: 70 }, { element: 'H', x: 10, y: 130 }, { element: 'H', x: 80, y: 40 }, { element: 'H', x: 80, y: 170 }, { element: 'H', x: 140, y: 40 }, { element: 'H', x: 180, y: 40 }, { element: 'H', x: 210, y: 70 }, { element: 'H', x: 210, y: 130 }, { element: 'H', x: 180, y: 170 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 1 }, { from: 2, to: 3, order: 1 }, { from: 3, to: 4, order: 1 }, { from: 0, to: 5, order: 1 }, { from: 0, to: 6, order: 1 }, { from: 0, to: 7, order: 1 }, { from: 1, to: 8, order: 1 }, { from: 1, to: 9, order: 1 }, { from: 3, to: 10, order: 1 }, { from: 4, to: 11, order: 1 }, { from: 4, to: 12, order: 1 }, { from: 4, to: 13, order: 1 }, { from: 4, to: 14, order: 1 }]
  },
  ethene: {
    atoms: [{ element: 'C', x: 80, y: 100 }, { element: 'C', x: 120, y: 100 }, { element: 'H', x: 50, y: 60 }, { element: 'H', x: 50, y: 140 }, { element: 'H', x: 150, y: 60 }, { element: 'H', x: 150, y: 140 }],
    bonds: [{ from: 0, to: 1, order: 2 }, { from: 0, to: 2, order: 1 }, { from: 0, to: 3, order: 1 }, { from: 1, to: 4, order: 1 }, { from: 1, to: 5, order: 1 }]
  },
  propene: {
    atoms: [{ element: 'C', x: 50, y: 100 }, { element: 'C', x: 90, y: 100 }, { element: 'C', x: 130, y: 100 }, { element: 'H', x: 20, y: 60 }, { element: 'H', x: 20, y: 140 }, { element: 'H', x: 90, y: 40 }, { element: 'H', x: 130, y: 40 }, { element: 'H', x: 130, y: 170 }, { element: 'H', x: 160, y: 70 }, { element: 'H', x: 160, y: 130 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 1, to: 2, order: 2 }, { from: 0, to: 3, order: 1 }, { from: 0, to: 4, order: 1 }, { from: 1, to: 5, order: 1 }, { from: 2, to: 6, order: 1 }, { from: 2, to: 7, order: 1 }, { from: 2, to: 8, order: 1 }, { from: 2, to: 9, order: 1 }]
  },
  formicacid: {
    atoms: [{ element: 'C', x: 100, y: 100 }, { element: 'O', x: 140, y: 70 }, { element: 'O', x: 140, y: 130 }, { element: 'H', x: 60, y: 100 }, { element: 'H', x: 170, y: 110 }],
    bonds: [{ from: 0, to: 1, order: 1 }, { from: 0, to: 2, order: 2 }, { from: 0, to: 3, order: 1 }, { from: 1, to: 4, order: 1 }]
  },
  benzene: {
    atoms: [
      { element: 'C', x: 100, y: 40 }, { element: 'C', x: 152, y: 70 }, { element: 'C', x: 152, y: 130 },
      { element: 'C', x: 100, y: 160 }, { element: 'C', x: 48, y: 130 }, { element: 'C', x: 48, y: 70 },
      { element: 'H', x: 100, y: 10 }, { element: 'H', x: 190, y: 70 }, { element: 'H', x: 190, y: 130 },
      { element: 'H', x: 100, y: 190 }, { element: 'H', x: 10, y: 130 }, { element: 'H', x: 10, y: 70 }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 }, { from: 1, to: 2, order: 1 }, { from: 2, to: 3, order: 2 },
      { from: 3, to: 4, order: 1 }, { from: 4, to: 5, order: 2 }, { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 1 }, { from: 1, to: 7, order: 1 }, { from: 2, to: 8, order: 1 },
      { from: 3, to: 9, order: 1 }, { from: 4, to: 10, order: 1 }, { from: 5, to: 11, order: 1 }
    ]
  },
  toluene: {
    atoms: [
      { element: 'C', x: 100, y: 40 }, { element: 'C', x: 152, y: 70 }, { element: 'C', x: 152, y: 130 },
      { element: 'C', x: 100, y: 160 }, { element: 'C', x: 48, y: 130 }, { element: 'C', x: 48, y: 70 },
      { element: 'C', x: 100, y: 100 },
      { element: 'H', x: 100, y: 10 }, { element: 'H', x: 190, y: 70 }, { element: 'H', x: 190, y: 130 },
      { element: 'H', x: 100, y: 190 }, { element: 'H', x: 10, y: 130 }, { element: 'H', x: 10, y: 70 },
      { element: 'H', x: 60, y: 100 }, { element: 'H', x: 140, y: 100 }, { element: 'H', x: 100, y: 60 },
      { element: 'H', x: 100, y: 140 }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 }, { from: 1, to: 2, order: 1 }, { from: 2, to: 3, order: 2 },
      { from: 3, to: 4, order: 1 }, { from: 4, to: 5, order: 2 }, { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 1 }, { from: 3, to: 6, order: 1 },
      { from: 0, to: 7, order: 1 }, { from: 1, to: 8, order: 1 }, { from: 2, to: 9, order: 1 },
      { from: 3, to: 10, order: 1 }, { from: 4, to: 11, order: 1 }, { from: 5, to: 12, order: 1 },
      { from: 6, to: 13, order: 1 }, { from: 6, to: 14, order: 1 }, { from: 6, to: 15, order: 1 }, { from: 6, to: 16, order: 1 }
    ]
  },
  phenol: {
    atoms: [
      { element: 'C', x: 100, y: 40 }, { element: 'C', x: 152, y: 70 }, { element: 'C', x: 152, y: 130 },
      { element: 'C', x: 100, y: 160 }, { element: 'C', x: 48, y: 130 }, { element: 'C', x: 48, y: 70 },
      { element: 'O', x: 100, y: 100 },
      { element: 'H', x: 100, y: 10 }, { element: 'H', x: 190, y: 70 }, { element: 'H', x: 190, y: 130 },
      { element: 'H', x: 100, y: 190 }, { element: 'H', x: 10, y: 130 }, { element: 'H', x: 10, y: 70 },
      { element: 'H', x: 60, y: 100 }, { element: 'H', x: 140, y: 100 }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 }, { from: 1, to: 2, order: 1 }, { from: 2, to: 3, order: 2 },
      { from: 3, to: 4, order: 1 }, { from: 4, to: 5, order: 2 }, { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 1 }, { from: 3, to: 6, order: 1 },
      { from: 0, to: 7, order: 1 }, { from: 1, to: 8, order: 1 }, { from: 2, to: 9, order: 1 },
      { from: 3, to: 10, order: 1 }, { from: 4, to: 11, order: 1 }, { from: 5, to: 12, order: 1 },
      { from: 6, to: 13, order: 1 }, { from: 6, to: 14, order: 1 }
    ]
  },
  benzoicacid: {
    atoms: [
      { element: 'C', x: 100, y: 40 }, { element: 'C', x: 152, y: 70 }, { element: 'C', x: 152, y: 130 },
      { element: 'C', x: 100, y: 160 }, { element: 'C', x: 48, y: 130 }, { element: 'C', x: 48, y: 70 },
      { element: 'C', x: 100, y: 100 }, { element: 'C', x: 100, y: 130 }, { element: 'O', x: 70, y: 130 },
      { element: 'O', x: 130, y: 130 }, { element: 'H', x: 100, y: 10 }, { element: 'H', x: 190, y: 70 },
      { element: 'H', x: 190, y: 130 }, { element: 'H', x: 100, y: 190 }, { element: 'H', x: 10, y: 130 },
      { element: 'H', x: 10, y: 70 }, { element: 'H', x: 50, y: 130 }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 }, { from: 1, to: 2, order: 1 }, { from: 2, to: 3, order: 2 },
      { from: 3, to: 4, order: 1 }, { from: 4, to: 5, order: 2 }, { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 1 }, { from: 3, to: 6, order: 1 },
      { from: 6, to: 7, order: 1 }, { from: 7, to: 8, order: 1 }, { from: 7, to: 9, order: 2 },
      { from: 0, to: 10, order: 1 }, { from: 1, to: 11, order: 1 }, { from: 2, to: 12, order: 1 },
      { from: 3, to: 13, order: 1 }, { from: 4, to: 14, order: 1 }, { from: 5, to: 15, order: 1 },
      { from: 8, to: 16, order: 1 }
    ]
  },
  aniline: {
    atoms: [
      { element: 'C', x: 100, y: 40 }, { element: 'C', x: 152, y: 70 }, { element: 'C', x: 152, y: 130 },
      { element: 'C', x: 100, y: 160 }, { element: 'C', x: 48, y: 130 }, { element: 'C', x: 48, y: 70 },
      { element: 'C', x: 100, y: 100 }, { element: 'N', x: 100, y: 140 },
      { element: 'H', x: 100, y: 10 }, { element: 'H', x: 190, y: 70 }, { element: 'H', x: 190, y: 130 },
      { element: 'H', x: 100, y: 190 }, { element: 'H', x: 10, y: 130 }, { element: 'H', x: 10, y: 70 },
      { element: 'H', x: 60, y: 100 }, { element: 'H', x: 140, y: 100 },
      { element: 'H', x: 70, y: 140 }, { element: 'H', x: 130, y: 140 }
    ],
    bonds: [
      { from: 0, to: 1, order: 2 }, { from: 1, to: 2, order: 1 }, { from: 2, to: 3, order: 2 },
      { from: 3, to: 4, order: 1 }, { from: 4, to: 5, order: 2 }, { from: 5, to: 0, order: 1 },
      { from: 0, to: 6, order: 1 }, { from: 3, to: 6, order: 1 },
      { from: 6, to: 7, order: 1 },
      { from: 0, to: 8, order: 1 }, { from: 1, to: 9, order: 1 }, { from: 2, to: 10, order: 1 },
      { from: 3, to: 11, order: 1 }, { from: 4, to: 12, order: 1 }, { from: 5, to: 13, order: 1 },
      { from: 6, to: 14, order: 1 }, { from: 6, to: 15, order: 1 },
      { from: 7, to: 16, order: 1 }, { from: 7, to: 17, order: 1 }
    ]
  }
};

export function getMoleculeStructure(moleculeId: string): MoleculeStructure | null {
  return moleculeStructures[moleculeId] || null;
}
