import { useState } from 'react';
import { useQuiz } from './hooks/useQuiz';
import { MoleculeRenderer, getFamilyColor } from './components/MoleculeRenderer';
import { StatsPanel } from './components/StatsPanel';
import { SettingsModal } from './components/SettingsModal';
import type { GameMode } from './types';
import { 
  Play, Settings, BarChart3, Clock, Skull, Trophy, FlaskConical, ArrowRight, X
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

  const gameModes: { mode: GameMode; label: string; icon: React.ReactNode; desc: string; color: string }[] = [
    { mode: 'Chronometre', label: 'Chronométré', icon: <Clock className="w-6 h-6" />, desc: 'Repondez en 15s', color: '#6366f1' },
    { mode: 'Libre', label: 'Libre', icon: <FlaskConical className="w-6 h-6" />, desc: 'Sans limite de temps', color: '#22c55e' },
    { mode: 'Survie', label: 'Survie', icon: <Skull className="w-6 h-6" />, desc: 'Une erreur = elimination', color: '#ef4444' },
  ];

  const renderHome = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-transparent pointer-events-none" />
      
      <div className="text-center mb-12 relative z-10">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg shadow-indigo-500/30">
          <FlaskConical className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Quiz Chimie
        </h1>
        <p className="text-zinc-400 text-xl max-w-md">
          Reconnaissez les familles de composes organiques
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl w-full mb-10 relative z-10">
        {gameModes.map((gm, i) => (
          <button
            key={gm.mode}
            onClick={() => startGame(gm.mode)}
            className="card p-6 text-left group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
              style={{ backgroundColor: `${gm.color}20`, color: gm.color }}
            >
              {gm.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{gm.label}</h3>
            <p className="text-zinc-500 text-sm">{gm.desc}</p>
          </button>
        ))}
      </div>

      <div className="flex gap-3 relative z-10">
        <button
          onClick={() => setShowStats(true)}
          className="btn btn-secondary"
        >
          <BarChart3 className="w-5 h-5" />
          Stats
        </button>
        <button
          onClick={() => setShowSettings(true)}
          className="btn btn-secondary"
        >
          <Settings className="w-5 h-5" />
          Config
        </button>
      </div>

      {stats.highScore > 0 && (
        <div className="mt-8 card-static px-6 py-3 flex items-center gap-3 relative z-10">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span className="text-zinc-400">Record:</span>
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
          className="btn btn-secondary btn-icon"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="card-static px-4 py-2 flex items-center gap-3">
            <Trophy className="w-4 h-4 text-yellow-500" />
            <span className="font-bold text-white">{quizState.score}</span>
            {quizState.combo > 1 && (
              <span className="text-purple-400 font-bold">x{quizState.combo}</span>
            )}
          </div>
        </div>

        <button
          onClick={() => setShowStats(true)}
          className="btn btn-secondary btn-icon"
        >
          <BarChart3 className="w-5 h-5" />
        </button>
      </header>

      <main className="flex-1 flex flex-col items-center max-w-lg mx-auto w-full">
        {quizState.mode === 'Chronometre' && (
          <div className="w-full mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-zinc-400 text-sm">Temps</span>
              <span className={`font-bold ${quizState.timeLeft <= 5 ? 'text-red-400' : 'text-white'}`}>
                {quizState.timeLeft}s
              </span>
            </div>
            <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
              <div 
                className="timer-bar h-full rounded-full transition-all duration-100"
                style={{ 
                  width: `${(quizState.timeLeft / settings.timerDuration) * 100}%`,
                  backgroundColor: quizState.timeLeft <= 5 ? '#ef4444' : '#6366f1'
                }}
              />
            </div>
          </div>
        )}

        {currentMolecule && (
          <div className="w-full mb-8">
            <div className="card-static p-8 text-center">
              <MoleculeRenderer 
                moleculeId={currentMolecule.id}
                family={currentMolecule.family}
                width={240}
                height={240}
              />
              <div className="mt-4 text-zinc-400 text-sm">
                Quelle est la famille de ce compose ?
              </div>
            </div>
          </div>
        )}

        <div className="w-full">
          {quizState.showAnswer ? (
            <div className="animate-fade-in">
              <div 
                className={`card-static p-6 text-center mb-4 ${
                  quizState.lastAnswerCorrect ? 'border-green-500/30' : 'border-red-500/30'
                }`}
                style={{ borderWidth: 2 }}
              >
                <div className={`text-2xl mb-2 ${quizState.lastAnswerCorrect ? 'text-green-400' : 'text-red-400'}`}>
                  {quizState.lastAnswerCorrect ? 'Correct !' : 'Incorrect'}
                </div>
                {currentMolecule && !quizState.lastAnswerCorrect && (
                  <div className="text-zinc-300">
                    Reponse: <span className="font-bold" style={{ color: getFamilyColor(currentMolecule.family) }}>{currentMolecule.family}</span>
                  </div>
                )}
              </div>
              
              <button
                onClick={nextQuestion}
                className="btn btn-primary w-full"
              >
                Suivant
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {currentMolecule && [currentMolecule.family, ...getWrongAnswers()].map((family, i) => (
                <button
                  key={family}
                  onClick={() => answerQuestion(family)}
                  className="answer-btn w-full"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getFamilyColor(family) }}
                  />
                  {family}
                </button>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );

  const renderGameOver = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6">
      <div className="card-static p-8 text-center max-w-md w-full">
        <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-6">Partie terminee!</h2>
        
        <div className="space-y-4 mb-8">
          <div className="card-static p-4">
            <div className="text-zinc-400 text-sm">Score</div>
            <div className="text-4xl font-bold text-white">{quizState.score.toLocaleString()}</div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="card-static p-4">
              <div className="text-zinc-500 text-xs">Serie max</div>
              <div className="text-2xl font-bold text-orange-400">{quizState.streak}</div>
            </div>
            <div className="card-static p-4">
              <div className="text-zinc-500 text-xs">Questions</div>
              <div className="text-2xl font-bold text-indigo-400">{quizState.currentQuestion}</div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => startGame(quizState.mode)}
            className="btn btn-primary w-full"
          >
            <Play className="w-5 h-5" />
            Rejouer
          </button>
          
          <button
            onClick={() => {
              endGame();
            }}
            className="btn btn-secondary w-full"
          >
            Menu
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
