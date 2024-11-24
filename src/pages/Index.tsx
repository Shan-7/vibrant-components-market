import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import { NewsletterSignup } from "../components/marketing/NewsletterSignup";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search as SearchIcon, Truck, Package, Users, Upload, Tool } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProjectCard } from "../components/projects/ProjectCard";

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

const dummyProjects = [
  {
    id: "1",
    title: "Arduino Weather Station",
    description: "DIY weather monitoring system using Arduino and various sensors",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
    category: "IoT"
  },
  {
    id: "2",
    title: "Smart Home Controller",
    description: "Home automation system with Raspberry Pi",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    category: "Home Automation"
  },
  {
    id: "3",
    title: "LED Music Visualizer",
    description: "Audio-reactive LED strip controller",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800",
    category: "Entertainment"
  },
  {
    id: "4",
    title: "Robot Arm Kit",
    description: "Educational robotic arm assembly kit",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800",
    category: "Robotics"
  },
  {
    id: "5",
    title: "3D Printed Drone",
    description: "Custom designed quadcopter frame",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?auto=format&fit=crop&w=800",
    category: "3D Printing"
  }
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
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#D2691E] bg-clip-text text-transparent">
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
            <Button type="submit" className="bg-primary hover:bg-primary/90">
              <SearchIcon className="w-4 h-4 mr-2" />
              Search
            </Button>
          </form>
        </div>
      </section>

      {/* Quick Options */}
      <section className="py-8 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="ghost" className="flex flex-col items-center p-6" onClick={() => navigate("/bulk-order")}>
              <Package className="w-8 h-8 mb-2" />
              <span>Bulk Orders</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center p-6" onClick={() => navigate("/careers")}>
              <Users className="w-8 h-8 mb-2" />
              <span>Careers</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center p-6" onClick={() => navigate("/3d-printing")}>
              <Upload className="w-8 h-8 mb-2" />
              <span>3D Printing</span>
            </Button>
            <Button variant="ghost" className="flex flex-col items-center p-6" onClick={() => navigate("/kits")}>
              <Tool className="w-8 h-8 mb-2" />
              <span>DIY Kits</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
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

      {/* Categories Section */}
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

      {/* Projects Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dummyProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto max-w-4xl">
          <NewsletterSignup />
        </div>
      </section>

      {/* Contact & Address Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <div className="space-y-2">
                <p>Email: support@brickelectronics.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Hours: Mon-Fri 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-4">Our Location</h2>
              <div className="space-y-2">
                <p>123 Tech Street</p>
                <p>Innovation District</p>
                <p>Silicon Valley, CA 94025</p>
                <p>United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
