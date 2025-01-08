import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search as SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <section className="pt-32 pb-16 px-4 bg-white">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#9b87f5] via-[#7E69AB] to-[#6E59A5] bg-clip-text text-transparent">
          Welcome to Ivonix Labs
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Your premier destination for Arduino, Raspberry Pi, and cutting-edge electronic components.
        </p>
        <form onSubmit={handleSearch} className="max-w-xl mx-auto flex gap-2 mb-8">
          <Input
            type="search"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-gray-100"
          />
          <Button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white">
            <SearchIcon className="w-4 h-4 mr-2" />
            Search
          </Button>
        </form>
      </div>
    </section>
  );
};