import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useToast } from "../hooks/use-toast";
import { ArrowLeft, ShoppingCart, Download, Heart, ZoomIn, Star } from "lucide-react";
import { products } from "../data/products";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { useState } from "react";
import { Dialog, DialogContent } from "../components/ui/dialog";
import { Badge } from "../components/ui/badge";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { toast } = useToast();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomOpen, setIsZoomOpen] = useState(false);
  
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

  const handleWishlist = () => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast({
        title: "Removed from wishlist",
        description: `${product.name} has been removed from your wishlist.`,
      });
    } else {
      addToWishlist(product);
      toast({
        title: "Added to wishlist",
        description: `${product.name} has been added to your wishlist.`,
      });
    }
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
            <div className="relative group">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full rounded-lg cursor-zoom-in"
                onClick={() => setIsZoomOpen(true)}
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={() => setIsZoomOpen(true)}
              >
                <ZoomIn className="w-5 h-5" />
              </Button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  className={`rounded-lg cursor-pointer hover:opacity-80 transition-opacity ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="sticky top-24">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted uppercase tracking-wider">{product.category}</span>
                <Badge variant="secondary" className="ml-2">
                  {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                </Badge>
              </div>
              <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted">(24 reviews)</span>
              </div>
              <p className="text-2xl font-bold text-primary mt-4">${product.price}</p>
              
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted">SKU: {product.sku}</p>
                <p className="text-sm text-muted">Manufacturer: {product.manufacturer}</p>
                <p className={`text-sm ${product.stock > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {product.stock > 0 ? `${product.stock} units available` : 'Out of Stock'}
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
                <Button
                  variant="outline"
                  className="w-full md:w-auto mt-4 md:mt-0"
                  onClick={handleWishlist}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isInWishlist(product.id) ? 'fill-primary' : ''}`} />
                  {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
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
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
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
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                <p className="text-muted">No reviews yet. Be the first to review this product!</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Dialog open={isZoomOpen} onOpenChange={setIsZoomOpen}>
        <DialogContent className="max-w-4xl">
          <img
            src={product.images[selectedImage]}
            alt={product.name}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductDetails;