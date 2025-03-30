
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
    <Link to={`/product/${id}`} className="max-w-[280px]">
      <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow group animate-fade-in">
        <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider">{category}</p>
          <h3 className="text-base font-semibold mt-1 line-clamp-1 text-gray-800">{name}</h3>
          <div className="flex items-center justify-between mt-3">
            <p className="text-lg font-bold text-primary">${price}</p>
            <Button 
              size="sm" 
              className="bg-primary hover:bg-primary/80 text-sm py-1" 
              onClick={handleAddToCart}
            >
              <ShoppingCart className="w-3 h-3 mr-1" />
              Add
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;
