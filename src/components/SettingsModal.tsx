import { Settings } from 'lucide-react';
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
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-card rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <Settings className="w-6 h-6 text-indigo-400" />
            Paramètres
          </h2>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="text-sm text-slate-400 mb-2 block">Temps par question</label>
            <div className="flex gap-2">
              {[15, 30, 60].map(time => (
                <button
                  key={time}
                  onClick={() => onUpdate({ timerDuration: time })}
                  className={`flex-1 p-3 rounded-lg border-2 transition-all ${
                    settings.timerDuration === time
                      ? 'border-indigo-500 bg-indigo-500/20 text-white'
                      : 'border-slate-600 bg-slate-800/30 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {time}s
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-400 mb-2 block">Type d'affichage</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { value: 'formule', label: 'Formule' },
                { value: 'developpee', label: 'Développée' },
                { value: 'squelettique', label: 'Squelettique' }
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => onUpdate({ displayType: opt.value as any })}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    settings.displayType === opt.value
                      ? 'border-indigo-500 bg-indigo-500/20 text-white'
                      : 'border-slate-600 bg-slate-800/30 text-slate-400 hover:border-slate-500'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm text-slate-400">Afficher groupe fonctionnel</label>
              <button
                onClick={() => onUpdate({ showFunctionalGroup: !settings.showFunctionalGroup })}
                className={`w-12 h-6 rounded-full transition-all ${
                  settings.showFunctionalGroup ? 'bg-indigo-500' : 'bg-slate-600'
                }`}
              >
                <div 
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    settings.showFunctionalGroup ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                />
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm text-slate-400 mb-3 block">Familles actives</label>
            <div className="grid grid-cols-2 gap-2">
              {families.map(family => (
                <button
                  key={family}
                  onClick={() => toggleFamily(family)}
                  className={`p-3 rounded-lg border-2 transition-all flex items-center gap-2 ${
                    settings.enabledFamilies.includes(family)
                      ? 'border-transparent'
                      : 'border-slate-600 bg-slate-800/30 opacity-50'
                  }`}
                  style={{ 
                    backgroundColor: settings.enabledFamilies.includes(family) 
                      ? `${familyColors[family]}20` 
                      : undefined
                  }}
                >
                  <span 
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: familyColors[family] }}
                  />
                  <span className={settings.enabledFamilies.includes(family) ? 'text-white' : 'text-slate-400'}>
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
