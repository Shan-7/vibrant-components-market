import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';

const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-3xl font-bold mb-8">My Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-muted">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                image={product.images[0]}
                category={product.category}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;