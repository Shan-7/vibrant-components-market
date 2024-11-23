import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/ui/use-toast";
import { ArrowLeft, ShoppingCart, Download } from "lucide-react";
import { products } from "../data/products";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-2xl font-bold">Product not found</h1>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      category: product.category
    });
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <img 
              src={product.images[0]} 
              alt={product.name} 
              className="w-full rounded-lg"
            />
            {product.images.slice(1).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} view ${index + 2}`}
                className="w-1/3 rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
              />
            ))}
          </div>
          <div>
            <div className="sticky top-24">
              <span className="text-sm text-muted uppercase tracking-wider">{product.category}</span>
              <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
              <p className="text-2xl font-bold text-primary mt-4">${product.price}</p>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted">SKU: {product.sku}</p>
                <p className="text-sm text-muted">Manufacturer: {product.manufacturer}</p>
                <p className={`text-sm ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : 'Out of Stock'}
                </p>
              </div>

              <p className="mt-6 text-muted">{product.description}</p>

              <div className="mt-8 space-x-4">
                <Button 
                  className="w-full md:w-auto" 
                  onClick={handleAddToCart}
                  disabled={product.stock === 0}
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
                {product.datasheets && product.datasheets.length > 0 && (
                  <Button variant="outline" className="w-full md:w-auto mt-4 md:mt-0">
                    <Download className="w-4 h-4 mr-2" />
                    Download Datasheet
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Tabs defaultValue="specs" className="w-full">
            <TabsList>
              <TabsTrigger value="specs">Technical Specifications</TabsTrigger>
              <TabsTrigger value="dimensions">Dimensions & Weight</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.technicalSpecs.map((spec, index) => (
                  <div key={index} className="flex justify-between p-4 bg-white/5 rounded-lg">
                    <span className="text-muted">{spec.name}</span>
                    <span className="font-medium">{spec.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="dimensions" className="mt-6">
              {product.dimensions ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="text-muted">Length</p>
                    <p className="text-lg font-medium">{product.dimensions.length} mm</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="text-muted">Width</p>
                    <p className="text-lg font-medium">{product.dimensions.width} mm</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-lg">
                    <p className="text-muted">Height</p>
                    <p className="text-lg font-medium">{product.dimensions.height} mm</p>
                  </div>
                </div>
              ) : (
                <p className="text-muted">No dimension information available</p>
              )}
              {product.weight && (
                <div className="mt-4 p-4 bg-white/5 rounded-lg">
                  <p className="text-muted">Weight</p>
                  <p className="text-lg font-medium">{product.weight} g</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;