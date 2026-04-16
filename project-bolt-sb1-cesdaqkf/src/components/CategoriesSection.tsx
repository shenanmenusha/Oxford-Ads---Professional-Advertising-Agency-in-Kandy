import { categories } from '../data/tips';

interface CategoriesSectionProps {
  activeCategory: string | null;
  onCategoryChange: (cat: string | null) => void;
}

export default function CategoriesSection({ activeCategory, onCategoryChange }: CategoriesSectionProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
          activeCategory === null
            ? 'bg-gray-900 text-white border-gray-900 shadow-md'
            : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
        }`}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
            activeCategory === cat.id
              ? `${cat.bgColor} ${cat.color} border-current shadow-sm`
              : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300'
          }`}
        >
          <span>{cat.icon}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
}
