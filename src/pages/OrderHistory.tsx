import Header from "../components/Header";
import { Card } from "../components/ui/card";
import { format } from "date-fns";

const mockOrders = [
  {
    id: "1",
    date: new Date("2024-02-01"),
    status: "Delivered",
    total: 89.97,
    items: [
      { id: "1", name: "Arduino Uno R3", quantity: 2, price: 23.99 },
      { id: "2", name: "Raspberry Pi 4", quantity: 1, price: 41.99 },
    ],
  },
  // Add more mock orders as needed
];

const OrderHistory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold mb-6">Order History</h1>
        <div className="space-y-4">
          {mockOrders.map((order) => (
            <Card key={order.id} className="p-6 bg-white/5">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="text-sm text-muted">Order #{order.id}</p>
                  <p className="text-sm text-muted">
                    {format(order.date, "MMMM d, yyyy")}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${order.total.toFixed(2)}</p>
                  <span className="inline-block px-2 py-1 text-xs rounded bg-primary/20 text-primary">
                    {order.status}
                  </span>
                </div>
              </div>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name} (x{item.quantity})</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default OrderHistory;