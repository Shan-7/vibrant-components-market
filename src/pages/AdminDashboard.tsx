import Header from "../components/Header";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ProductManagement } from "../components/admin/ProductManagement";
import { OrderManagement } from "../components/admin/OrderManagement";
import { Analytics } from "../components/admin/Analytics";
import { Card } from "../components/ui/card";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card className="p-6 bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Total Products</h3>
            <p className="text-3xl font-bold text-primary">150</p>
          </Card>
          <Card className="p-6 bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
            <p className="text-3xl font-bold text-primary">125</p>
          </Card>
          <Card className="p-6 bg-white/5">
            <h3 className="text-lg font-semibold mb-2">Total Revenue</h3>
            <p className="text-3xl font-bold text-primary">$12,450</p>
          </Card>
        </div>

        <Tabs defaultValue="products">
          <TabsList>
            <TabsTrigger value="products">Products</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products">
            <ProductManagement />
          </TabsContent>
          
          <TabsContent value="orders">
            <OrderManagement />
          </TabsContent>
          
          <TabsContent value="analytics">
            <Analytics />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminDashboard;