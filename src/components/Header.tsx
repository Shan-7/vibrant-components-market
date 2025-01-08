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

  const categories = [
    "NVIDIA® Jetson",
    "Raspberry Pi",
    "BeagleBoard®",
    "Arduino",
    "XIAO",
    "Meshtastic",
    "Grove",
    "LoRaWAN®",
    "Home Assistant",
    "Decentralize",
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto">
        {/* Main header */}
        <div className="flex items-center justify-between py-4 px-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/ivonix-labs-logo.png" alt="Ivonix Labs Store" className="h-8" />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <Button variant="ghost">Products</Button>
            </div>
            <Button variant="ghost">Documents</Button>
            <Button variant="ghost">Service</Button>
            <Button variant="ghost">Solution</Button>
            <Button variant="ghost">Support</Button>
          </nav>

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden md:flex">
              <Input
                type="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64"
              />
            </form>
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>

        {/* Categories bar */}
        <div className="border-t overflow-x-auto">
          <div className="flex items-center gap-4 px-4 py-2 min-w-max">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="text-sm px-4 py-1 rounded-full border border-green-100 hover:bg-green-50 transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;