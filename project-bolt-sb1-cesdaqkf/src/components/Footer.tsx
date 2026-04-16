import { Sparkles, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
}

const links = [
  { label: 'For Girls', section: 'girls' },
  { label: 'For Boys', section: 'boys' },
  { label: 'All Tips', section: 'all-tips' },
  { label: 'Quick Wins', section: 'quick-wins' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 font-bold text-xl mb-4 hover:text-rose-400 transition-colors"
            >
              <Sparkles className="w-5 h-5 text-rose-400" />
              GlowUp Guide
            </button>
            <p className="text-gray-400 text-sm leading-relaxed">
              Practical, science-backed tips to help you look and feel your absolute best — for free. No gimmicks, no products to buy.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">Navigate</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => onNavigate(link.section)}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 mb-4">The Promise</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Every tip on this site is actionable, realistic, and free. Your glow up starts with a decision — the resources are right here.
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            2024 GlowUp Guide. Built to help you become your best self.
          </p>
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            Made with <Heart className="w-3 h-3 text-rose-400 fill-rose-400" /> for everyone who is ready to level up
          </div>
        </div>
      </div>
    </footer>
  );
}
