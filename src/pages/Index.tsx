import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

const featuredProducts = [
  {
    name: "Arduino Uno R3",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
    category: "Microcontrollers"
  },
  {
    name: "Raspberry Pi 4",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    category: "Single Board Computers"
  },
  {
    name: "LED Matrix Display",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=800",
    category: "Displays"
  },
];

const categories = [
  { name: "Microcontrollers", icon: "/placeholder.svg", count: 156 },
  { name: "Sensors", icon: "/placeholder.svg", count: 89 },
  { name: "Displays", icon: "/placeholder.svg", count: 45 },
  { name: "Power Supply", icon: "/placeholder.svg", count: 78 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Build Something Amazing
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Discover our vast collection of electronic components and bring your projects to life.
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <CategoryCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;