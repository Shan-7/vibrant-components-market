import { Card } from "../ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { format } from "date-fns";

const mockOrders = [
  {
    id: "1",
    date: new Date(),
    status: "Processing",
    customer: "John Doe",
    total: 299.99,
  },
  // Add more mock orders as needed
];

export const OrderManagement = () => {
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>#{order.id}</TableCell>
              <TableCell>{format(order.date, "MMM dd, yyyy")}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Badge>{order.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};