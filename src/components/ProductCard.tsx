import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../context/CartContext";
import { useToast } from "./ui/use-toast";
import { Link } from "react-router-dom";
import { Product } from "../data/products";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  product?: Product;
}

const ProductCard = ({ id, name, price, image, category, product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart({ id, name, price, image, category });
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/product/${id}`}>
      <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors group animate-fade-in">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-muted uppercase tracking-wider">{category}</p>
          <h3 className="text-lg font-semibold mt-1">{name}</h3>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xl font-bold text-primary">${price}</p>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/80" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;