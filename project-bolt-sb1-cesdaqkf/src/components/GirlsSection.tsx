import { useState } from 'react';
import { allTips } from '../data/tips';
import { Category } from '../types';
import TipCard from './TipCard';
import CategoriesSection from './CategoriesSection';

export default function GirlsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const tips = allTips.filter(
    (t) => (t.gender === 'girls' || t.gender === 'both') && (!activeCategory || t.category === activeCategory)
  );

  return (
    <section className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              For Girls
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Glow Up Tips
              <span className="block text-rose-500">for Girls</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              From skincare routines that actually work to style upgrades, fitness habits, and confidence-building mindset shifts — everything you need to become your best self.
            </p>
          </div>
          <div className="relative lg:flex justify-end hidden">
            <img
              src="https://images.pexels.com/photos/3764119/pexels-photo-3764119.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Girls glow up"
              className="rounded-3xl shadow-xl w-72 object-cover aspect-[3/4]"
            />
            <div className="absolute bottom-4 left-0 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <p className="text-sm font-bold text-gray-900">Skin, Style & Confidence</p>
              <p className="text-xs text-gray-400">All in one place</p>
            </div>
          </div>
        </div>

        <CategoriesSection
          activeCategory={activeCategory}
          onCategoryChange={(cat) => setActiveCategory(cat as Category | null)}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map((tip) => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>

        {tips.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg font-medium">No tips in this category yet.</p>
            <p className="text-sm mt-1">Try selecting a different filter.</p>
          </div>
        )}
      </div>
    </section>
  );
}
