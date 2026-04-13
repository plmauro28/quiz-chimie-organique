import { useState, useEffect, useCallback, useRef } from 'react';
import { molecules, families } from '../data/molecules';
import type { 
  Molecule, 
  ChemicalFamily, 
  GameMode, 
  QuizState, 
  Stats, 
  Settings,
  Badge
} from '../types';
import { DEFAULT_SETTINGS } from '../types';

const STORAGE_KEY = 'quiz-chimie-stats';
const SETTINGS_KEY = 'quiz-chimie-settings';

const INITIAL_STATE: QuizState = {
  mode: 'Chronometre',
  currentQuestion: 0,
  score: 0,
  combo: 0,
  streak: 0,
  timeLeft: 15,
  isActive: false,
  isPaused: false,
  showAnswer: false,
  lastAnswerCorrect: false,
  questionType: 'formule'
};

const INITIAL_STATS: Stats = {
  totalQuestions: 0,
  correctAnswers: 0,
  accuracyByFamily: {
    'Alcane': { correct: 0, total: 0 },
    'Alcène': { correct: 0, total: 0 },
    'Alcool': { correct: 0, total: 0 },
    'Aldéhyde': { correct: 0, total: 0 },
    'Cétone': { correct: 0, total: 0 },
    'Acide carboxylique': { correct: 0, total: 0 },
    'Ester': { correct: 0, total: 0 },
    'Amine': { correct: 0, total: 0 },
    'Amide': { correct: 0, total: 0 },
    'Éther': { correct: 0, total: 0 },
  },
  averageTime: 0,
  bestStreak: 0,
  highScore: 0,
  gamesPlayed: 0,
  badges: []
};

export function useQuiz() {
  const [quizState, setQuizState] = useState<QuizState>(INITIAL_STATE);
  const [stats, setStats] = useState<Stats>(INITIAL_STATS);
  const [settings, setSettings] = useState<Settings>(DEFAULT_SETTINGS);
  const [currentMolecule, setCurrentMolecule] = useState<Molecule | null>(null);
  const [questionStartTime, setQuestionStartTime] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const savedStats = localStorage.getItem(STORAGE_KEY);
    if (savedStats) {
      try {
        setStats(JSON.parse(savedStats));
      } catch (e) {
        console.error('Failed to load stats');
      }
    }
    const savedSettings = localStorage.getItem(SETTINGS_KEY);
    if (savedSettings) {
      try {
        setSettings(JSON.parse(savedSettings));
      } catch (e) {
        console.error('Failed to load settings');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  }, [stats]);

  useEffect(() => {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  }, [settings]);

  const getRandomMolecule = useCallback((): Molecule => {
    const filtered = molecules.filter(m => 
      settings.enabledFamilies.includes(m.family)
    );
    return filtered[Math.floor(Math.random() * filtered.length)];
  }, [settings.enabledFamilies]);

  const checkBadge = useCallback((newStats: Stats): Badge[] => {
    const newBadges: Badge[] = [];
    if (newStats.correctAnswers >= 10 && !newStats.badges.find(b => b.id === 'first-10')) {
      newBadges.push({ id: 'first-10', name: 'Premier pas', description: '10 réponses correctes', icon: '🎯' });
    }
    if (newStats.bestStreak >= 5 && !newStats.badges.find(b => b.id === 'streak-5')) {
      newBadges.push({ id: 'streak-5', name: 'En feu !', description: '5 bonnes réponses de suite', icon: '🔥' });
    }
    if (newStats.highScore >= 1000 && !newStats.badges.find(b => b.id === 'score-1000')) {
      newBadges.push({ id: 'score-1000', name: 'Millenium', description: '1000 points', icon: '⭐' });
    }
    if (newStats.gamesPlayed >= 10 && !newStats.badges.find(b => b.id === 'games-10')) {
      newBadges.push({ id: 'games-10', name: 'Assidu', description: '10 parties jouées', icon: '📚' });
    }
    families.forEach(family => {
      const accuracy = newStats.accuracyByFamily[family];
      if (accuracy && accuracy.total >= 5 && accuracy.correct === accuracy.total && 
          !newStats.badges.find(b => b.id === `master-${family}`)) {
        newBadges.push({ id: `master-${family}`, name: `Maître ${family}`, description: `5/5 en ${family}`, icon: '👑' });
      }
    });
    return newBadges;
  }, []);

  const startGame = useCallback((mode: GameMode = 'Chronometre') => {
    const molecule = getRandomMolecule();
    setCurrentMolecule(molecule);
    setQuizState({
      ...INITIAL_STATE,
      mode,
      isActive: true,
      timeLeft: settings.timerDuration,
      questionType: Math.random() > 0.5 ? 'formule' : 'structure'
    });
    setQuestionStartTime(Date.now());
  }, [getRandomMolecule, settings.timerDuration]);

  const answerQuestion = useCallback((selectedFamily: ChemicalFamily) => {
    if (!currentMolecule || quizState.showAnswer) return;

    const isCorrect = selectedFamily === currentMolecule.family;
    const timeTaken = (Date.now() - questionStartTime) / 1000;

    let scoreGain = 0;
    let newCombo = quizState.combo;
    let newStreak = quizState.streak;

    if (isCorrect) {
      scoreGain = 100;
      if (quizState.mode === 'Chronometre') {
        scoreGain += Math.max(0, Math.round(50 * (quizState.timeLeft / settings.timerDuration)));
      }
      newCombo = Math.min(5, quizState.combo + 1);
      newStreak = quizState.streak + 1;
      scoreGain *= newCombo;
    } else {
      newCombo = 0;
      newStreak = 0;
    }

    setQuizState(prev => ({
      ...prev,
      showAnswer: true,
      lastAnswerCorrect: isCorrect,
      score: prev.score + scoreGain,
      combo: newCombo,
      streak: newStreak
    }));

    setStats(prev => {
      const newStats = {
        ...prev,
        totalQuestions: prev.totalQuestions + 1,
        correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0),
        highScore: Math.max(prev.highScore, (prev.score || 0) + scoreGain),
        bestStreak: Math.max(prev.bestStreak, newStreak),
        averageTime: (prev.averageTime * prev.totalQuestions + timeTaken) / (prev.totalQuestions + 1),
        gamesPlayed: prev.gamesPlayed,
        accuracyByFamily: {
          ...prev.accuracyByFamily,
          [currentMolecule.family]: {
            correct: prev.accuracyByFamily[currentMolecule.family].correct + (isCorrect ? 1 : 0),
            total: prev.accuracyByFamily[currentMolecule.family].total + 1
          }
        }
      };
      const newBadges = checkBadge(newStats);
      if (newBadges.length > 0) {
        newStats.badges = [...newStats.badges, ...newBadges.map(b => ({ ...b, earnedAt: new Date() }))];
      }
      return newStats;
    });

    if (quizState.mode === 'Survie' && !isCorrect) {
      setTimeout(() => {
        setQuizState(prev => ({ ...prev, isActive: false }));
      }, 1000);
    }
  }, [currentMolecule, quizState, questionStartTime, settings.timerDuration, checkBadge]);

  const nextQuestion = useCallback(() => {
    const molecule = getRandomMolecule();
    setCurrentMolecule(molecule);
    setQuizState(prev => ({
      ...prev,
      currentQuestion: prev.currentQuestion + 1,
      showAnswer: false,
      timeLeft: settings.timerDuration,
      questionType: Math.random() > 0.5 ? 'formule' : 'structure'
    }));
    setQuestionStartTime(Date.now());
  }, [getRandomMolecule, settings.timerDuration]);

  useEffect(() => {
    if (quizState.isActive && !quizState.isPaused && !quizState.showAnswer && quizState.mode === 'Chronometre') {
      timerRef.current = setInterval(() => {
        setQuizState(prev => {
          if (prev.timeLeft <= 1) {
            return { ...prev, timeLeft: 0, showAnswer: true, lastAnswerCorrect: false };
          }
          return { ...prev, timeLeft: prev.timeLeft - 1 };
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [quizState.isActive, quizState.isPaused, quizState.showAnswer, quizState.mode]);

  useEffect(() => {
    if (quizState.showAnswer && quizState.timeLeft === 0 && quizState.mode === 'Chronometre' && quizState.isActive) {
      setStats(prev => ({
        ...prev,
        totalQuestions: prev.totalQuestions + 1,
        accuracyByFamily: currentMolecule ? {
          ...prev.accuracyByFamily,
          [currentMolecule.family]: {
            correct: prev.accuracyByFamily[currentMolecule.family].correct,
            total: prev.accuracyByFamily[currentMolecule.family].total + 1
          }
        } : prev.accuracyByFamily
      }));
    }
  }, [quizState.showAnswer, quizState.timeLeft, quizState.mode, quizState.isActive, currentMolecule]);

  const endGame = useCallback(() => {
    setQuizState(prev => ({ ...prev, isActive: false }));
    setStats(prev => ({ ...prev, gamesPlayed: prev.gamesPlayed + 1 }));
  }, []);

  const updateSettings = useCallback((newSettings: Partial<Settings>) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  }, []);

  const resetStats = useCallback(() => {
    setStats(INITIAL_STATS);
    localStorage.removeItem(STORAGE_KEY);
  }, []);

  return {
    quizState,
    stats,
    settings,
    currentMolecule,
    families: settings.enabledFamilies,
    startGame,
    answerQuestion,
    nextQuestion,
    endGame,
    updateSettings,
    resetStats
  };
}
