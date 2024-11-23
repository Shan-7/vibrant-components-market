import { useParams, Link } from "react-router-dom";
import Header from "../components/Header";
import { Button } from "../components/ui/button";
import { useCart } from "../context/CartContext";
import { useToast } from "../components/ui/use-toast";
import { ArrowLeft, ShoppingCart } from "lucide-react";

const products = {
  "1": {
    id: "1",
    name: "Arduino Uno R3",
    price: 23.99,
    image: "https://images.unsplash.com/photo-1608564697071-ddf911d81370?auto=format&fit=crop&w=800",
    category: "Microcontrollers",
    description: "The Arduino Uno R3 is a microcontroller board based on the ATmega328P. It has 14 digital input/output pins, 6 analog inputs, a 16 MHz ceramic resonator, a USB connection, a power jack, an ICSP header, and a reset button.",
    specifications: [
      "Operating Voltage: 5V",
      "Input Voltage: 7-12V",
      "Digital I/O Pins: 14",
      "Analog Input Pins: 6",
      "DC Current per I/O Pin: 20 mA",
      "Flash Memory: 32 KB"
    ]
  },
  "2": {
    id: "2",
    name: "Raspberry Pi 4 Model B",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800",
    category: "Single Board Computers",
    description: "The Raspberry Pi 4 Model B is the latest product in the popular Raspberry Pi range of computers. It offers ground-breaking increases in processor speed, multimedia performance, memory, and connectivity compared to its predecessors.",
    specifications: [
      "Processor: Quad-core Cortex-A72",
      "RAM: 4GB LPDDR4",
      "Connectivity: 2.4 GHz and 5.0 GHz WiFi",
      "Bluetooth: 5.0",
      "USB Ports: 2 × USB 3.0 + 2 × USB 2.0",
      "Video: 2 × micro HDMI"
    ]
  },
  // Additional product definitions can be added here.
};

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = products[id as keyof typeof products];

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
    addToCart(product);
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
          <div>
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
          </div>
          <div>
            <span className="text-sm text-muted uppercase tracking-wider">{product.category}</span>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <p className="text-2xl font-bold text-primary mt-4">${product.price}</p>
            <p className="text-muted mt-4">{product.description}</p>
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Specifications</h2>
              <ul className="space-y-2">
                {product.specifications.map((spec, index) => (
                  <li key={index} className="text-muted">{spec}</li>
                ))}
              </ul>
            </div>
            <Button className="mt-8 w-full" onClick={handleAddToCart}>
              <ShoppingCart className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
