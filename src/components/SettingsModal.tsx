import { Settings as SettingsIcon, X } from 'lucide-react';
import type { Settings as SettingsType, ChemicalFamily } from '../types';
import { families, familyColors } from '../data/molecules';

interface SettingsModalProps {
  settings: SettingsType;
  onUpdate: (settings: Partial<SettingsType>) => void;
  onClose: () => void;
}

export function SettingsModal({ settings, onUpdate, onClose }: SettingsModalProps) {
  const toggleFamily = (family: ChemicalFamily) => {
    const current = settings.enabledFamilies;
    if (current.includes(family)) {
      if (current.length > 1) {
        onUpdate({ enabledFamilies: current.filter(f => f !== family) });
      }
    } else {
      onUpdate({ enabledFamilies: [...current, family] });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="card-static p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto animate-scale-in">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <SettingsIcon className="w-6 h-6 text-indigo-400" />
            Configuration
          </h2>
          <button 
            onClick={onClose}
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm text-zinc-400 mb-3 block">Temps par question</label>
            <div className="flex gap-2">
              {[15, 30, 60].map(time => (
                <button
                  key={time}
                  onClick={() => onUpdate({ timerDuration: time })}
                  className={`flex-1 p-3 rounded-xl border transition-all ${
                    settings.timerDuration === time
                      ? 'border-indigo-500 bg-indigo-500/10 text-white'
                      : 'border-zinc-700 bg-transparent text-zinc-400 hover:border-zinc-600'
                  }`}
                >
                  {time}s
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-zinc-400 mb-3 block">Familles actives</label>
            <div className="grid grid-cols-2 gap-2">
              {families.map(family => (
                <button
                  key={family}
                  onClick={() => toggleFamily(family)}
                  className={`p-3 rounded-xl border transition-all flex items-center gap-2 ${
                    settings.enabledFamilies.includes(family)
                      ? 'border-transparent'
                      : 'border-zinc-700 bg-transparent opacity-50'
                  }`}
                  style={{ 
                    backgroundColor: settings.enabledFamilies.includes(family) 
                      ? `${familyColors[family]}15` 
                      : undefined
                  }}
                >
                  <span 
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: familyColors[family] }}
                  />
                  <span className={settings.enabledFamilies.includes(family) ? 'text-white text-sm' : 'text-zinc-500 text-sm'}>
                    {family}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
