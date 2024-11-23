import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search as SearchIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import { products } from '../data/products';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const { data: searchResults } = useQuery({
    queryKey: ['search', searchQuery],
    queryFn: () => {
      // Filter products based on name, description, or category
      return products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
    },
    enabled: searchQuery.length > 0
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <div className="flex gap-4 mb-8">
          <Input
            type="search"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-xl"
          />
          <Button>
            <SearchIcon className="w-4 h-4 mr-2" />
            Search
          </Button>
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