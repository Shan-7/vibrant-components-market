import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { products } from '../data/products';

// Simple function to calculate string similarity
const calculateSimilarity = (str1: string, str2: string) => {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;
  if (longer.length === 0) return 1.0;
  return (longer.length - editDistance(longer, shorter)) / longer.length;
};

const editDistance = (str1: string, str2: string) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  const costs = [];
  
  for (let i = 0; i <= str1.length; i++) {
    let lastValue = i;
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0) {
        costs[j] = j;
      } else if (j > 0) {
        let newValue = costs[j - 1];
        if (str1.charAt(i - 1) !== str2.charAt(j - 1)) {
          newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
        }
        costs[j - 1] = lastValue;
        lastValue = newValue;
      }
    }
    if (i > 0) costs[str2.length] = lastValue;
  }
  return costs[str2.length];
};

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const { data: searchResults } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => {
      return products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    enabled: searchQuery.length > 0
  });

  useEffect(() => {
    if (searchQuery.length > 2) {
      const productNames = products.map(p => p.name);
      const similarProducts = productNames
        .filter(name => calculateSimilarity(name.toLowerCase(), searchQuery.toLowerCase()) > 0.4)
        .slice(0, 5);
      setSuggestions(similarProducts);
    } else {
      setSuggestions([]);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex flex-col gap-4 mb-8">
          <div className="relative">
            <Input
              type="search"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="max-w-xl"
            />
            <Button className="absolute right-0 top-0">
              <SearchIcon className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          
          {suggestions.length > 0 && searchQuery.length > 2 && (
            <div className="max-w-xl bg-background border rounded-md shadow-lg p-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-left px-3 py-2 hover:bg-accent rounded-md"
                  onClick={() => setSearchQuery(suggestion)}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}
        </div>

        {searchQuery && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {searchResults?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                category={product.category}
                product={product}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Search;