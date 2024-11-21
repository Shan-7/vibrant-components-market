import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";

const featuredProducts = [
  {
    name: "Arduino Uno R3",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=800",
    category: "Microcontrollers"
  },
  {
    name: "Raspberry Pi 4",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    category: "Single Board Computers"
  },
  {
    name: "Arduino Nano",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?auto=format&fit=crop&w=800",
    category: "Microcontrollers"
  },
];

const categories = [
  { 
    name: "Microcontrollers", 
    icon: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=100", 
    count: 156 
  },
  { 
    name: "Single Board Computers", 
    icon: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=100", 
    count: 89 
  },
  { 
    name: "Sensors", 
    icon: "https://images.unsplash.com/photo-1557858310-9052820906f7?auto=format&fit=crop&w=100", 
    count: 45 
  },
  { 
    name: "Power Supply", 
    icon: "https://images.unsplash.com/photo-1597225244660-1cd128c64284?auto=format&fit=crop&w=100", 
    count: 78 
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Welcome to Nexus
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto">
            Your one-stop shop for Arduino, Raspberry Pi, and all your electronic component needs.
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