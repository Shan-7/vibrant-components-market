import CategoryCard from "../CategoryCard";

export const CategoriesSection = ({ categories }: { categories: any[] }) => {
  return (
    <section className="py-16 px-4 bg-white/5">
      <div className="container mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-violet-100 dark:border-violet-900 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Browse Categories</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
}