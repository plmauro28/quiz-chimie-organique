import { BarChart3, Target, Clock, Trophy, Gamepad2, Award, Flame } from 'lucide-react';
import type { Stats } from '../types';
import { families, familyColors } from '../data/molecules';

interface StatsPanelProps {
  stats: Stats;
  onClose: () => void;
}

export function StatsPanel({ stats, onClose }: StatsPanelProps) {
  const totalAccuracy = stats.totalQuestions > 0 
    ? Math.round((stats.correctAnswers / stats.totalQuestions) * 100) 
    : 0;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="w-6 h-6 text-indigo-400" />
            Statistiques
          </h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="glass rounded-xl p-4 text-center">
            <Gamepad2 className="w-6 h-6 text-indigo-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{stats.gamesPlayed}</div>
            <div className="text-xs text-slate-400">Parties jouées</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <Target className="w-6 h-6 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{totalAccuracy}%</div>
            <div className="text-xs text-slate-400">Précision</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{stats.highScore.toLocaleString()}</div>
            <div className="text-xs text-slate-400">Meilleur score</div>
          </div>
          <div className="glass rounded-xl p-4 text-center">
            <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">{stats.bestStreak}</div>
            <div className="text-xs text-slate-400">Meilleure série</div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
            <Clock className="w-5 h-5 text-slate-400" />
            Précision par famille
          </h3>
          <div className="space-y-2">
            {families.map(family => {
              const data = stats.accuracyByFamily[family];
              const accuracy = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;
              return (
                <div key={family} className="flex items-center gap-3">
                  <span 
                    className="w-24 text-sm font-medium truncate"
                    style={{ color: familyColors[family] }}
                  >
                    {family}
                  </span>
                  <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all duration-500"
                      style={{ 
                        width: `${accuracy}%`,
                        backgroundColor: familyColors[family]
                      }}
                    />
                  </div>
                  <span className="text-sm text-slate-400 w-12 text-right">
                    {data.total > 0 ? `${data.correct}/${data.total}` : '-'}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {stats.badges.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              Badges ({stats.badges.length})
            </h3>
            <div className="grid grid-cols-3 gap-2">
              {stats.badges.map(badge => (
                <div 
                  key={badge.id} 
                  className="glass rounded-lg p-3 text-center"
                  title={badge.description}
                >
                  <div className="text-2xl mb-1">{badge.icon}</div>
                  <div className="text-xs text-white font-medium truncate">{badge.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
