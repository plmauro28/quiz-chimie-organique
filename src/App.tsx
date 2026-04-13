import { useState } from 'react';
import { useQuiz } from './hooks/useQuiz';
import { MoleculeDisplay } from './components/MoleculeDisplay';
import { Timer } from './components/Timer';
import { ScoreBoard } from './components/ScoreBoard';
import { AnswerButtons } from './components/AnswerButtons';
import { StatsPanel } from './components/StatsPanel';
import { SettingsModal } from './components/SettingsModal';
import type { GameMode } from './types';
import { 
  Play, 
  Settings, 
  BarChart3, 
  Clock, 
  Skull, 
  Trophy,
  FlaskConical,
  ArrowRight,
  RotateCcw
} from 'lucide-react';

function App() {
  const { 
    quizState, 
    stats, 
    settings, 
    currentMolecule, 
    families,
    startGame, 
    answerQuestion, 
    nextQuestion,
    endGame,
    updateSettings
  } = useQuiz();

  const [showStats, setShowStats] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  const getWrongAnswers = () => {
    if (!currentMolecule) return [];
    const others = families.filter(f => f !== currentMolecule.family);
    return [...others].sort(() => Math.random() - 0.5).slice(0, 3);
  };

  const gameModes: { mode: GameMode; label: string; icon: React.ReactNode; desc: string }[] = [
    { mode: 'Chronometre', label: 'Chronométré', icon: <Clock className="w-6 h-6" />, desc: 'Répondez vite!' },
    { mode: 'Libre', label: 'Libre', icon: <FlaskConical className="w-6 h-6" />, desc: 'Sans pression' },
    { mode: 'Survie', label: 'Survie', icon: <Skull className="w-6 h-6" />, desc: 'Une erreur = mort' },
  ];

  const renderHome = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12 animate-slide-up">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-indigo-500/30">
          <FlaskConical className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Quiz Chimie Organique
        </h1>
        <p className="text-slate-400 text-lg max-w-md">
          Testez vos connaissances des familles chimiques en vous amusant!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-8">
        {gameModes.map((gm, i) => (
          <button
            key={gm.mode}
            onClick={() => startGame(gm.mode)}
            className="glass-card rounded-2xl p-6 text-left hover:scale-[1.02] transition-all duration-300 animate-slide-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400 mb-4 w-fit">
              {gm.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{gm.label}</h3>
            <p className="text-slate-400 text-sm">{gm.desc}</p>
          </button>
        ))}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setShowStats(true)}
          className="btn-secondary px-6 py-3 rounded-xl text-white flex items-center gap-2"
        >
          <BarChart3 className="w-5 h-5" />
          Statistiques
        </button>
        <button
          onClick={() => setShowSettings(true)}
          className="btn-secondary px-6 py-3 rounded-xl text-white flex items-center gap-2"
        >
          <Settings className="w-5 h-5" />
          Paramètres
        </button>
      </div>

      {stats.highScore > 0 && (
        <div className="mt-8 glass rounded-xl px-6 py-3 flex items-center gap-3">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-slate-400">Meilleur score:</span>
          <span className="text-xl font-bold text-white">{stats.highScore.toLocaleString()}</span>
        </div>
      )}
    </div>
  );

  const renderGame = () => (
    <div className="min-h-screen flex flex-col p-4">
      <header className="flex justify-between items-center mb-6">
        <button
          onClick={endGame}
          className="btn-secondary px-4 py-2 rounded-lg text-white flex items-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Quitter
        </button>

        <ScoreBoard score={quizState.score} combo={quizState.combo} streak={quizState.streak} />

        <div className="flex gap-2">
          <button
            onClick={() => setShowStats(true)}
            className="btn-secondary p-2 rounded-lg text-white"
          >
            <BarChart3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setShowSettings(true)}
            className="btn-secondary p-2 rounded-lg text-white"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center max-w-2xl mx-auto w-full">
        {quizState.mode === 'Chronometre' && (
          <Timer 
            timeLeft={quizState.timeLeft} 
            maxTime={settings.timerDuration}
          />
        )}

        {currentMolecule && (
          <div className="w-full mb-6">
            <MoleculeDisplay 
              molecule={currentMolecule}
              displayType={settings.displayType}
              showFunctionalGroup={settings.showFunctionalGroup}
              questionType={quizState.questionType}
            />
          </div>
        )}

        <div className="w-full">
          {quizState.showAnswer ? (
            <div className="animate-slide-up">
              <div className={`glass-card rounded-xl p-6 text-center mb-4 ${
                quizState.lastAnswerCorrect ? 'border-green-500/50' : 'border-red-500/50'
              }`}>
                <div className={`text-2xl mb-2 ${quizState.lastAnswerCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {quizState.lastAnswerCorrect ? '✓ Correct!' : '✗ Incorrect'}
                </div>
                {currentMolecule && !quizState.lastAnswerCorrect && (
                  <div className="text-slate-300">
                    La réponse était: <span className="font-bold" style={{ color: 'var(--accent)' }}>{currentMolecule.family}</span>
                  </div>
                )}
              </div>
              
              <button
                onClick={nextQuestion}
                className="btn-primary w-full p-4 rounded-xl text-white font-bold text-lg flex items-center justify-center gap-2"
              >
                Question suivante
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <AnswerButtons
              families={currentMolecule ? [currentMolecule.family, ...getWrongAnswers()] : []}
              correctAnswer={currentMolecule?.family || 'Alcane'}
              showAnswer={quizState.showAnswer}
              onAnswer={answerQuestion}
              disabled={quizState.showAnswer}
            />
          )}
        </div>
      </main>
    </div>
  );

  const renderGameOver = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 text-center max-w-md w-full animate-slide-up">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mb-6">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-2">Partie terminée!</h2>
        
        <div className="py-6 space-y-4">
          <div className="glass rounded-xl p-4">
            <div className="text-slate-400 text-sm">Score final</div>
            <div className="text-4xl font-bold text-white">{quizState.score.toLocaleString()}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="glass rounded-xl p-4">
              <div className="text-slate-400 text-xs">Meilleure série</div>
              <div className="text-2xl font-bold text-orange-400">{quizState.streak}</div>
            </div>
            <div className="glass rounded-xl p-4">
              <div className="text-slate-400 text-xs">Questions</div>
              <div className="text-2xl font-bold text-indigo-400">{quizState.currentQuestion}</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => startGame(quizState.mode)}
            className="btn-primary w-full p-4 rounded-xl text-white font-bold flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Rejouer
          </button>
          
          <button
            onClick={() => {
              endGame();
            }}
            className="btn-secondary w-full p-4 rounded-xl text-white font-bold"
          >
            Menu principal
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {!quizState.isActive && quizState.currentQuestion === 0 && renderHome()}
      {quizState.isActive && !quizState.showAnswer && renderGame()}
      {quizState.isActive && quizState.showAnswer && quizState.mode !== 'Survie' && renderGame()}
      {quizState.isActive && quizState.showAnswer && quizState.mode === 'Survie' && !quizState.lastAnswerCorrect && renderGameOver()}
      {!quizState.isActive && quizState.currentQuestion > 0 && renderGameOver()}

      {showStats && <StatsPanel stats={stats} onClose={() => setShowStats(false)} />}
      {showSettings && <SettingsModal settings={settings} onUpdate={updateSettings} onClose={() => setShowSettings(false)} />}
    </div>
  );
}

export default App;
