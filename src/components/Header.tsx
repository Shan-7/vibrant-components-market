import { ShoppingCart, Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { items } = useCart();
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-[#8B5CF6] to-secondary rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl font-bold text-white font-mono transform -rotate-6">N</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-[#8B5CF6] to-secondary bg-clip-text text-transparent">
              Nexus
            </h1>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/" className="text-muted hover:text-white transition-colors">Components</Link>
            <Link to="/" className="text-muted hover:text-white transition-colors">Categories</Link>
            <Link to="/" className="text-muted hover:text-white transition-colors">Deals</Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;