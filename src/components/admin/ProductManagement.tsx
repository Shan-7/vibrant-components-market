import { useState } from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Pencil, Trash2, Plus } from "lucide-react";
import { useToast } from "../ui/use-toast";
import { Product } from "../../data/products";

interface ProductFormData extends Omit<Product, "id"> {}

export const ProductManagement = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleAddProduct = (formData: FormData) => {
    const newProduct: Product = {
      id: Date.now().toString(),
      name: formData.get('name') as string,
      sku: formData.get('sku') as string,
      category: formData.get('category') as string,
      description: formData.get('description') as string,
      price: parseFloat(formData.get('price') as string),
      stock: parseInt(formData.get('stock') as string),
      manufacturer: formData.get('manufacturer') as string,
      technicalSpecs: [],
      images: ['https://via.placeholder.com/150'],
      tags: (formData.get('tags') as string).split(','),
    };
    
    setProducts([...products, newProduct]);
    setIsDialogOpen(false);
    toast({
      title: "Success",
      description: "Product added successfully",
    });
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Product deleted successfully",
    });
  };

  return (
    <Card className="bg-white/5">
      <div className="p-4">
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{editingProduct ? 'Edit Product' : 'Add New Product'}</DialogTitle>
            </DialogHeader>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              handleAddProduct(new FormData(e.currentTarget));
            }}>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <Label htmlFor="sku">SKU</Label>
                <Input id="sku" name="sku" required />
              </div>
              <div>
                <Label htmlFor="category">Category</Label>
                <Input id="category" name="category" required />
              </div>
              <div>
                <Label htmlFor="description">Description</Label>
                <Input id="description" name="description" required />
              </div>
              <div>
                <Label htmlFor="price">Price</Label>
                <Input id="price" name="price" type="number" step="0.01" required />
              </div>
              <div>
                <Label htmlFor="stock">Stock</Label>
                <Input id="stock" name="stock" type="number" required />
              </div>
              <div>
                <Label htmlFor="manufacturer">Manufacturer</Label>
                <Input id="manufacturer" name="manufacturer" required />
              </div>
              <div>
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input id="tags" name="tags" required />
              </div>
              <Button type="submit">Save Product</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>${product.price}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      setEditingProduct(product);
                      setIsDialogOpen(true);
                    }}
                  >
                    <Pencil className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDeleteProduct(product.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};