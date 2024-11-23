import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { Button } from "../ui/button";
import { Truck, Package, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "../../hooks/use-toast";

type OrderStatus = "Processing" | "Verified" | "Shipped" | "Delivered" | "Cancelled";

interface Order {
  id: string;
  date: Date;
  status: OrderStatus;
  customer: string;
  total: number;
  trackingNumber?: string;
}

const mockOrders: Order[] = [
  {
    id: "1",
    date: new Date(),
    status: "Processing",
    customer: "John Doe",
    total: 299.99,
  },
  {
    id: "2",
    date: new Date(),
    status: "Shipped",
    customer: "Jane Smith",
    total: 199.99,
    trackingNumber: "1Z999AA1234567890"
  },
];

const getStatusColor = (status: OrderStatus) => {
  switch (status) {
    case "Processing": return "bg-yellow-500";
    case "Verified": return "bg-blue-500";
    case "Shipped": return "bg-purple-500";
    case "Delivered": return "bg-green-500";
    case "Cancelled": return "bg-red-500";
    default: return "bg-gray-500";
  }
};

const getStatusIcon = (status: OrderStatus) => {
  switch (status) {
    case "Processing": return AlertCircle;
    case "Verified": return CheckCircle;
    case "Shipped": return Truck;
    case "Delivered": return Package;
    default: return AlertCircle;
  }
};

export const OrderManagement = () => {
  const { toast } = useToast();
  
  const { data: orders, isLoading } = useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockOrders;
    },
    staleTime: 30000, // 30 seconds
  });

  const handleUpdateStatus = (orderId: string, newStatus: OrderStatus) => {
    toast({
      title: "Order status updated",
      description: `Order #${orderId} has been marked as ${newStatus}`,
    });
  };

  const handleGenerateLabel = (orderId: string) => {
    toast({
      title: "Shipping label generated",
      description: `Shipping label for order #${orderId} has been generated`,
    });
  };

  if (isLoading) {
    return (
      <Card className="p-6 bg-white/5">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-white/10 rounded w-1/4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-10 bg-white/10 rounded"></div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <Card className="bg-white/5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders?.map((order) => {
            const StatusIcon = getStatusIcon(order.status);
            return (
              <TableRow key={order.id}>
                <TableCell>#{order.id}</TableCell>
                <TableCell>{format(order.date, "MMM dd, yyyy")}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>${order.total.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(order.status)} text-white`}>
                    <StatusIcon className="w-4 h-4 mr-1" />
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleUpdateStatus(order.id, "Verified")}
                      disabled={order.status !== "Processing"}
                    >
                      Verify
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleGenerateLabel(order.id)}
                      disabled={order.status !== "Verified"}
                    >
                      Generate Label
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Card>
  );
};