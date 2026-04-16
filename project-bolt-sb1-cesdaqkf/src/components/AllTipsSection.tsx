import { useState } from 'react';
import { allTips } from '../data/tips';
import { Category, Gender } from '../types';
import TipCard from './TipCard';
import CategoriesSection from './CategoriesSection';

const genderFilters: { id: Gender | 'all'; label: string }[] = [
  { id: 'all', label: 'Everyone' },
  { id: 'girls', label: 'Girls' },
  { id: 'boys', label: 'Boys' },
  { id: 'both', label: 'Universal' },
];

export default function AllTipsSection() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeGender, setActiveGender] = useState<Gender | 'all'>('all');

  const tips = allTips.filter((t) => {
    const matchCat = !activeCategory || t.category === activeCategory;
    const matchGender =
      activeGender === 'all' || t.gender === activeGender || t.gender === 'both';
    return matchCat && matchGender;
  });

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Complete Library
          </div>
          <h2 className="text-4xl font-black text-gray-900 mb-4">All Glow Up Tips</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Browse every tip by category and audience. Filter to find exactly what you need right now.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {genderFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveGender(f.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all border ${
                activeGender === f.id
                  ? 'bg-gray-900 text-white border-gray-900'
                  : 'bg-white text-gray-600 border-gray-200 hover:border-gray-400'
              }`}
            >
              {f.label}
            </button>
          ))}
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
            <p className="text-lg font-medium">No tips match your filters.</p>
            <p className="text-sm mt-1">Try changing the category or audience.</p>
          </div>
        )}
      </div>
    </section>
  );
}
