import { useState } from 'react';
import { allTips } from '../data/tips';
import { Category } from '../types';
import TipCard from './TipCard';
import CategoriesSection from './CategoriesSection';

export default function BoysSection() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);

  const tips = allTips.filter(
    (t) => (t.gender === 'boys' || t.gender === 'both') && (!activeCategory || t.category === activeCategory)
  );

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 via-white to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              For Boys
            </div>
            <h2 className="text-4xl font-black text-gray-900 mb-4">
              Glow Up Tips
              <span className="block text-sky-500">for Boys</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Grooming habits, style upgrades, strength training, and the mindset shifts that separate guys who get results from those who stay stuck. Level up every area of your life.
            </p>
          </div>
          <div className="relative lg:flex justify-end hidden">
            <img
              src="https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?auto=compress&cs=tinysrgb&w=500"
              alt="Boys glow up"
              className="rounded-3xl shadow-xl w-72 object-cover aspect-[3/4]"
            />
            <div className="absolute bottom-4 left-0 bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <p className="text-sm font-bold text-gray-900">Grooming, Fitness & Style</p>
              <p className="text-xs text-gray-400">Real tips, real results</p>
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
