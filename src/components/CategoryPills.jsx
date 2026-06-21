const categories = [
  { id: 'all', label: 'Todos', active: true },
  { id: 'desarrollo', label: 'Desarrollo' },
  { id: 'cloud', label: 'Cloud' },
  { id: 'ia', label: 'IA' },
];

export function CategoryPills({ activeCategory, onCategoryChange }) {
  return (
    <section className="mt-stack-lg overflow-x-auto hide-scrollbar flex gap-3 px-margin-mobile pb-2" aria-label="Categorías">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`flex-none px-6 py-2 rounded-full font-label-md text-label-md transition-all ${
            activeCategory === cat.id
              ? 'bg-primary text-on-primary'
              : 'bg-surface-container border border-outline-variant text-on-surface-variant'
          }`}>
          {cat.label}
        </button>
      ))}
    </section>
  );
}
