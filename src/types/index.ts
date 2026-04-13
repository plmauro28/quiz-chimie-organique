export interface Molecule {
  id: string;
  name: string;
  formula: string;
  formulaDeveloppee: string;
  formulaSquelettique: string;
  family: ChemicalFamily;
  functionalGroup: string;
}

export type ChemicalFamily =
  | 'Alcane'
  | 'Alcène'
  | 'Alcool'
  | 'Aldéhyde'
  | 'Cétone'
  | 'Acide carboxylique'
  | 'Ester'
  | 'Amine'
  | 'Amide'
  | 'Éther';

export type GameMode = 'Chronometre' | 'Libre' | 'Campagne' | 'Survie';

export type QuestionType = 'formule' | 'structure' | 'nom';

export interface QuizState {
  mode: GameMode;
  currentQuestion: number;
  score: number;
  combo: number;
  streak: number;
  timeLeft: number;
  isActive: boolean;
  isPaused: boolean;
  showAnswer: boolean;
  lastAnswerCorrect: boolean;
  questionType: QuestionType;
}

export interface Stats {
  totalQuestions: number;
  correctAnswers: number;
  accuracyByFamily: Record<ChemicalFamily, { correct: number; total: number }>;
  averageTime: number;
  bestStreak: number;
  highScore: number;
  gamesPlayed: number;
  badges: Badge[];
  score?: number;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  earnedAt?: Date;
  icon: string;
}

export interface Settings {
  timerDuration: number;
  enabledFamilies: ChemicalFamily[];
  displayType: 'formule' | 'developpee' | 'squelettique';
  showFunctionalGroup: boolean;
}

export const DEFAULT_SETTINGS: Settings = {
  timerDuration: 15,
  enabledFamilies: [
    'Alcane', 'Alcène', 'Alcool', 'Aldéhyde', 'Cétone',
    'Acide carboxylique', 'Ester', 'Amine', 'Amide', 'Éther'
  ],
  displayType: 'formule',
  showFunctionalGroup: false
};
