import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const featuredProducts = [
  {
    id: "1",
    name: "Arduino Uno R3",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=800",
    category: "Microcontrollers"
  },
  {
    id: "2",
    name: "Raspberry Pi 4 Model B",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    category: "Single Board Computers"
  },
  {
    id: "3",
    name: "Arduino Nano",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
    category: "Microcontrollers"
  },
  {
    id: "4",
    name: "ESP32 Development Board",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    category: "WiFi & Bluetooth"
  },
  {
    id: "5",
    name: "Raspberry Pi Pico",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800",
    category: "Microcontrollers"
  },
  {
    id: "6",
    name: "Arduino Mega 2560",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800",
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
    name: "Sensors & Modules", 
    icon: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=100", 
    count: 245 
  },
  { 
    name: "Development Kits", 
    icon: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=100", 
    count: 78 
  },
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
            Welcome to Brick Electronics
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-8">
            Your premier destination for Arduino, Raspberry Pi, and cutting-edge electronic components.
          </p>
          <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2 mb-8">
            <Input
              type="search"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5"
            />
            <Button type="submit">
              <SearchIcon className="w-4 h-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.image}
                category={product.category}
              />
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

      {/* Why Choose Us section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Brick Electronics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white/5 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-muted">All our products are thoroughly tested and guaranteed authentic.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-muted">Quick delivery with real-time tracking on all orders.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-lg">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
              <p className="text-muted">Technical assistance available 24/7 for all your queries.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
