import { Zap } from 'lucide-react';
import { quickWins } from '../data/tips';

export default function QuickWinsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            <Zap className="w-4 h-4" />
            Start Today
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">Quick Wins</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Six habits you can start today with zero cost that produce visible results within days.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {quickWins.map((win, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-2xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {win.icon}
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{win.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{win.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-rose-500 to-amber-500 rounded-3xl p-10 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-1/2 -translate-x-1/2" />
          </div>
          <div className="relative">
            <h3 className="text-3xl font-black mb-3">The 30-Day Glow Up Challenge</h3>
            <p className="text-white/80 text-lg mb-6 max-w-xl mx-auto">
              Commit to all six quick wins for 30 consecutive days. Your skin, energy, confidence, and body will visibly transform.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Week 1', desc: 'Build the basics: water, sleep, skincare' },
                { label: 'Week 2', desc: 'Add movement and clean eating' },
                { label: 'Week 3–4', desc: 'Compound the habits, see real results' },
              ].map((phase) => (
                <div key={phase.label} className="bg-white/15 rounded-xl p-4 backdrop-blur-sm">
                  <div className="font-bold text-lg mb-1">{phase.label}</div>
                  <div className="text-white/75 text-sm">{phase.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
