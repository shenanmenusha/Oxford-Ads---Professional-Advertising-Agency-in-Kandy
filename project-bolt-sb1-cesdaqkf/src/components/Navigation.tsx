import { useState } from 'react';
import { Sparkles, Menu, X } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'girls', label: 'For Girls' },
  { id: 'boys', label: 'For Boys' },
  { id: 'all-tips', label: 'All Tips' },
  { id: 'quick-wins', label: 'Quick Wins' },
];

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (id: string) => {
    onNavigate(id);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => handleNav('home')}
            className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-rose-500 transition-colors"
          >
            <Sparkles className="w-5 h-5 text-rose-500" />
            GlowUp Guide
          </button>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-200'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                activeSection === link.id
                  ? 'bg-rose-50 text-rose-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
