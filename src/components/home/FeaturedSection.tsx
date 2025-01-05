import ProductCard from "../ProductCard";

export const FeaturedSection = ({ products }: { products: any[] }) => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border border-violet-100 dark:border-violet-900 rounded-lg p-6 mb-8">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Products</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}