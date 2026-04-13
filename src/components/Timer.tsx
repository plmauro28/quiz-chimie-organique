import { Timer as TimerIcon, AlertTriangle } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
  maxTime: number;
}

export function Timer({ timeLeft, maxTime }: TimerProps) {
  const percentage = (timeLeft / maxTime) * 100;
  const isLow = timeLeft <= 5 && timeLeft > 0;
  const isCritical = timeLeft <= 3;

  return (
    <div className="glass-card rounded-xl p-4 flex items-center gap-4">
      <div className={`p-2 rounded-lg ${isCritical ? 'bg-red-500/20' : isLow ? 'bg-yellow-500/20' : 'bg-indigo-500/20'}`}>
        {isCritical ? (
          <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
        ) : (
          <TimerIcon className={`w-6 h-6 ${isLow ? 'text-yellow-400' : 'text-indigo-400'}`} />
        )}
      </div>
      
      <div className="flex-1">
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm text-slate-400">Temps</span>
          <span className={`text-xl font-bold ${isCritical ? 'text-red-400' : isLow ? 'text-yellow-400' : 'text-white'}`}>
            {timeLeft}s
          </span>
        </div>
        <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
          <div 
            className={`timer-bar h-full rounded-full transition-all duration-100 ${
              isCritical ? 'bg-red-500' : isLow ? 'bg-yellow-500' : 'bg-gradient-to-r from-indigo-500 to-purple-500'
            }`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
