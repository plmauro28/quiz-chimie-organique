import { Trophy, Flame, Zap } from 'lucide-react';

interface ScoreBoardProps {
  score: number;
  combo: number;
  streak: number;
}

export function ScoreBoard({ score, combo, streak }: ScoreBoardProps) {
  return (
    <div className="glass-card rounded-xl p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-yellow-500/20 rounded-lg">
          <Trophy className="w-5 h-5 text-yellow-400" />
        </div>
        <div>
          <div className="text-xs text-slate-400">Score</div>
          <div className="text-xl font-bold text-white">{score.toLocaleString()}</div>
        </div>
      </div>

      {combo > 1 && (
        <div className="flex items-center gap-2 animate-slide-up">
          <Zap className="w-5 h-5 text-purple-400" />
          <span className="text-lg font-bold text-purple-400">x{combo}</span>
        </div>
      )}

      {streak > 0 && (
        <div className="flex items-center gap-2">
          <Flame className="w-5 h-5 text-orange-400" />
          <span className="text-lg font-bold text-orange-400">{streak}</span>
        </div>
      )}
    </div>
  );
}
