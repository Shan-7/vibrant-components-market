import { ShoppingCart, Menu, Search, User } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-2 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-16 w-16">
              <img src="/ivonix-labs-logo.png" alt="Ivonix Labs Store" className="w-full h-full object-contain" />
            </div>
            <span className="text-xl font-bold text-gray-900">Ivonix Labs Store</span>
          </Link>
          
          <div className="flex-1 max-w-xl mx-8">
            <form onSubmit={handleSearch} className="flex gap-2">
              <Input
                type="search"
                placeholder="Search product"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-gray-100"
              />
              <Button type="submit" variant="ghost" size="icon">
                <Search className="w-5 h-5" />
              </Button>
            </form>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Link to="/cart" className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
              <span className="hidden md:inline">Cart ({cartItemsCount})</span>
            </Link>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between h-12">
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">HOME</Link>
            <Link to="/shop" className="text-gray-700 hover:text-gray-900">SHOP</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">ABOUT</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">CONTACT US</Link>
            <Link to="/b2b" className="text-gray-700 hover:text-gray-900">B2B</Link>
            <Link to="/blog" className="text-gray-700 hover:text-gray-900">BLOGS</Link>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-5 h-5" />
          </Button>
          <div className="hidden md:block">
            <span className="text-sm">Customer Service: +91 9370566844</span>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;