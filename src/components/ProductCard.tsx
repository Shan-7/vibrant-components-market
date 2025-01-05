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
      <Card className="bg-white border hover:shadow-lg transition-shadow duration-300">
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 mb-1">{name}</h3>
          <p className="text-sm text-gray-500 mb-3">{category}</p>
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">₹{price}</span>
              {product?.originalPrice && (
                <span className="text-sm text-gray-500 line-through">₹{product.originalPrice}</span>
              )}
            </div>
            <Button 
              onClick={handleAddToCart}
              className="bg-gray-900 hover:bg-gray-800 text-white"
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