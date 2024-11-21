import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-[#8B5CF6] to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white font-mono transform -rotate-6">N</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-[#8B5CF6] to-secondary bg-clip-text text-transparent">
              Nexus
            </h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-muted hover:text-white transition-colors">Components</a>
            <a href="#" className="text-muted hover:text-white transition-colors">Categories</a>
            <a href="#" className="text-muted hover:text-white transition-colors">Deals</a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <ShoppingCart className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;