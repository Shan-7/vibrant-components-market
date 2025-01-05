import Header from "../components/Header";
import { WelcomeSection } from "../components/home/WelcomeSection";
import { FeaturedSection } from "../components/home/FeaturedSection";
import { CategoriesSection } from "../components/home/CategoriesSection";
import { ThemeToggle } from "../components/theme/ThemeToggle";
import ContactSection from "../components/contact/ContactSection";
import { NewsletterSignup } from "../components/marketing/NewsletterSignup";
import { ProjectCard } from "../components/projects/ProjectCard";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Package, Users, Upload, Wrench } from "lucide-react";

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
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <ThemeToggle />
      <WelcomeSection />
      
      {/* Quick Options */}
      <section className="py-8 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm border border-violet-100 dark:border-violet-900 rounded-lg p-6">
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
                <Wrench className="w-8 h-8 mb-2" />
                <span>DIY Kits</span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturedSection products={featuredProducts} />
      <CategoriesSection categories={categories} />

      {/* Projects Showcase */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white/5 backdrop-blur-sm border border-violet-100 dark:border-violet-900 rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Projects</h2>
          </div>
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
          <div className="bg-white/5 backdrop-blur-sm border border-violet-100 dark:border-violet-900 rounded-lg p-6">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      <ContactSection />
    </div>
  );
};

export default Index;
