
import { ShoppingCart, Menu, Search, Heart } from "lucide-react";
import { Button } from "./ui/button";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "./ui/input";
import { useState } from "react";

const Header = () => {
  const { items } = useCart();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const cartItemsCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-10 w-10 relative">
              <svg viewBox="0 0 40 40" className="w-full h-full">
                <path
                  d="M20 0L40 10V30L20 40L0 30V10L20 0Z"
                  fill="#3B82F6"
                  className="animate-pulse"
                />
                <path
                  d="M20 4L36 12V28L20 36L4 28V12L20 4Z"
                  fill="#10B981"
                />
                <path
                  d="M20 8L32 14V26L20 32L8 26V14L20 8Z"
                  fill="#F59E0B"
                />
                <text
                  x="20"
                  y="24"
                  fontSize="12"
                  fontWeight="bold"
                  fill="white"
                  textAnchor="middle"
                >
                  BE
                </text>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-800">Brick Electronics</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/components" className="text-gray-600 hover:text-primary transition-colors">Components</Link>
            <Link to="/category/all" className="text-gray-600 hover:text-primary transition-colors">Categories</Link>
            <Link to="/projects" className="text-gray-600 hover:text-primary transition-colors">Projects</Link>
            <Link to="/3d-printing" className="text-gray-600 hover:text-primary transition-colors">3D Printing</Link>
          </nav>
        </div>
        
        <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl mx-8">
          <form onSubmit={handleSearch} className="flex-1 flex gap-2">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-gray-200"
            />
            <Button type="submit" variant="secondary">
              <Search className="w-4 h-4" />
            </Button>
          </form>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary hover:bg-gray-100">
              <Heart className="w-5 h-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative text-gray-600 hover:text-primary hover:bg-gray-100">
              <ShoppingCart className="w-5 h-5" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden text-gray-600 hover:bg-gray-100">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
