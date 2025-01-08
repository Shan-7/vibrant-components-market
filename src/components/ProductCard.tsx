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
  sku?: string;
  originalPrice?: number;
  product?: Product;
}

const ProductCard = ({ id, name, price, image, category, sku, originalPrice, product }: ProductCardProps) => {
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

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Link to={`/product/${id}`}>
      <Card className="group overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
          {category && (
            <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
              {category}
            </span>
          )}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="p-4">
          {sku && <p className="text-xs text-gray-500 mb-1">SKU {sku}</p>}
          <h3 className="text-lg font-medium text-gray-900 mb-2 line-clamp-2">{name}</h3>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
              {originalPrice && (
                <>
                  <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
                  <span className="text-sm text-green-600">({discount}% OFF)</span>
                </>
              )}
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;