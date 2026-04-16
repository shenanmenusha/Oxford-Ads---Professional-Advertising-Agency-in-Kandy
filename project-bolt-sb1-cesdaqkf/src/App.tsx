import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import HomeOverview from './components/HomeOverview';
import GirlsSection from './components/GirlsSection';
import BoysSection from './components/BoysSection';
import AllTipsSection from './components/AllTipsSection';
import QuickWinsSection from './components/QuickWinsSection';
import Footer from './components/Footer';

type Section = 'home' | 'girls' | 'boys' | 'all-tips' | 'quick-wins';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');

  const handleNavigate = (section: string) => {
    setActiveSection(section as Section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const titles: Record<Section, string> = {
      home: 'GlowUp Guide — Transform Yourself',
      girls: 'Glow Up Tips for Girls — GlowUp Guide',
      boys: 'Glow Up Tips for Boys — GlowUp Guide',
      'all-tips': 'All Tips — GlowUp Guide',
      'quick-wins': 'Quick Wins — GlowUp Guide',
    };
    document.title = titles[activeSection];
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      <main>
        {activeSection === 'home' && (
          <>
            <Hero onNavigate={handleNavigate} />
            <HomeOverview onNavigate={handleNavigate} />
          </>
        )}
        {activeSection === 'girls' && <GirlsSection />}
        {activeSection === 'boys' && <BoysSection />}
        {activeSection === 'all-tips' && <AllTipsSection />}
        {activeSection === 'quick-wins' && <QuickWinsSection />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
