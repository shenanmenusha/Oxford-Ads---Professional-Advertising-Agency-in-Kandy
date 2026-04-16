import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Tip } from '../types';
import { categories } from '../data/tips';

interface TipCardProps {
  tip: Tip;
}

const difficultyConfig = {
  easy: { label: 'Easy', classes: 'bg-green-50 text-green-700 border-green-100' },
  medium: { label: 'Medium', classes: 'bg-amber-50 text-amber-700 border-amber-100' },
  hard: { label: 'Challenging', classes: 'bg-red-50 text-red-700 border-red-100' },
};

export default function TipCard({ tip }: TipCardProps) {
  const [expanded, setExpanded] = useState(false);
  const cat = categories.find((c) => c.id === tip.category);
  const diff = difficultyConfig[tip.difficulty];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${cat?.bgColor}`}>
            {cat?.icon}
          </div>
          <div className="flex gap-2 flex-wrap justify-end">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${diff.classes}`}>
              {diff.label}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full border bg-gray-50 text-gray-600 border-gray-100">
              {cat?.label}
            </span>
          </div>
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-rose-600 transition-colors">
          {tip.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{tip.description}</p>

        <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-4">
          <Clock className="w-3.5 h-3.5" />
          <span>{tip.timeframe}</span>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-1.5 text-sm font-semibold text-rose-500 hover:text-rose-700 transition-colors"
        >
          {expanded ? 'Hide steps' : 'Show steps'}
          {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>
      </div>

      {expanded && (
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Step-by-step</p>
          <ol className="space-y-2">
            {tip.steps.map((step, i) => (
              <li key={i} className="flex gap-3 text-sm text-gray-700">
                <span className="flex-shrink-0 w-5 h-5 bg-rose-100 text-rose-600 text-xs font-bold rounded-full flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
