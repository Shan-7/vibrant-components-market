import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import { ArrowLeft } from "lucide-react";

const categoryProducts = {
  "Microcontrollers": [
    {
      id: "1",
      name: "Arduino Uno R3",
      price: 23.99,
      image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=800",
      category: "Microcontrollers"
    },
    {
      id: "3",
      name: "Arduino Nano",
      price: 12.99,
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800",
      category: "Microcontrollers"
    },
    {
      id: "5",
      name: "Raspberry Pi Pico",
      price: 8.99,
      image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800",
      category: "Microcontrollers"
    },
  ],
  "Single Board Computers": [
    {
      id: "2",
      name: "Raspberry Pi 4 Model B",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
      category: "Single Board Computers"
    }
  ],
  // Additional categories can be added here
};

const CategoryProducts = () => {
  const { category } = useParams();
  const products = categoryProducts[category as keyof typeof categoryProducts] || [];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Categories
        </Link>
        <h1 className="text-3xl font-bold mb-8">{category}</h1>
        {products.length === 0 ? (
          <p className="text-muted">No products found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryProducts;
