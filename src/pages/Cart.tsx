import { useCart } from "../context/CartContext";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import Header from "../components/Header";
import { Minus, Plus, Trash2, Save } from "lucide-react";
import { useToast } from "../hooks/use-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, total } = useCart();
  const { toast } = useToast();

  const handleQuantityUpdate = (id: string, newQuantity: number, stock: number = 10) => {
    if (newQuantity > stock) {
      toast({
        title: "Stock limit reached",
        description: `Sorry, only ${stock} items available`,
        variant: "destructive",
      });
      return;
    }
    updateQuantity(id, Math.max(0, newQuantity));
  };

  const calculateSubtotal = (price: number, quantity: number) => {
    return price * quantity;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 pt-24">
          <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
          <p className="text-muted">Your cart is empty</p>
          <Link to="/">
            <Button className="mt-4">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id} className="p-4 bg-white/5">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted">{item.category}</p>
                    <p className="text-primary font-bold mt-1">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityUpdate(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityUpdate(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="icon"
                        onClick={() => {
                          toast({
                            title: "Saved for later",
                            description: `${item.name} has been saved for later`,
                          });
                        }}
                      >
                        <Save className="h-4 w-4" />
                      </Button>
                    </div>
                    <p className="text-sm text-muted mt-2">
                      Subtotal: ${calculateSubtotal(item.price, item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div className="lg:col-span-1">
            <Card className="p-6 bg-white/5 sticky top-24">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
                <div className="border-t border-white/10 pt-2 mt-2">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${(total + (total * 0.1)).toFixed(2)}</span>
                  </div>
                </div>
              </div>
              <Link to="/checkout">
                <Button className="w-full mt-6">Proceed to Checkout</Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;