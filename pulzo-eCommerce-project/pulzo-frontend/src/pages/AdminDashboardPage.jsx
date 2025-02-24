import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useState } from "react";

function AdminDashboardPage() {
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [currentFeature, setCurrentFeature] = useState("");

  const addKeyFeature = () => {
    if (currentFeature.trim()) {
      setKeyFeatures([...keyFeatures, currentFeature.trim()]);
      setCurrentFeature("");
    }
  };

  const removeKeyFeature = (index) => {
    setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-8 xl:px-16">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Admin Dashboard
        </h1>

        <Tabs defaultValue="products" className="space-y-4">
          <TabsList className="bg-white">
            <TabsTrigger value="products">Product Management</TabsTrigger>
            <TabsTrigger value="inventory">Inventory Management</TabsTrigger>
          </TabsList>

          <TabsContent value="products" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Add Product</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="productName">Product Name</Label>
                    <Input id="productName" placeholder="Enter product name" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="category">Product Category</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="electronics">Electronics</SelectItem>
                        <SelectItem value="clothing">Clothing</SelectItem>
                        <SelectItem value="books">Books</SelectItem>
                        <SelectItem value="home">Home & Living</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="image">Image URL</Label>
                    <Input id="image" placeholder="Enter image URL" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="price">Price</Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="Enter price"
                      min="0"
                      step="0.01"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="ratings">Ratings</Label>
                    <Input
                      id="ratings"
                      type="number"
                      placeholder="Enter ratings"
                      min="0"
                      max="5"
                      step="0.1"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="stock">Stock</Label>
                    <Input
                      id="stock"
                      type="number"
                      placeholder="Enter stock quantity"
                      min="0"
                    />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="synopsis">Synopsis</Label>
                    <Input id="synopsis" placeholder="Enter product synopsis" />
                  </div>

                  <div className="col-span-2 space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Enter detailed product description"
                      className="min-h-[150px]"
                    />
                  </div>

                  <div className="col-span-2 space-y-4">
                    <Label htmlFor="keyFeatures">Key Features</Label>
                    <div className="flex gap-2">
                      <Input
                        id="keyFeatures"
                        value={currentFeature}
                        onChange={(e) => setCurrentFeature(e.target.value)}
                        placeholder="Add key feature"
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            e.preventDefault();
                            addKeyFeature();
                          }
                        }}
                      />
                      <Button onClick={addKeyFeature}>Add</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {keyFeatures.map((feature, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="px-3 py-1 text-sm"
                        >
                          {feature}
                          <button
                            onClick={() => removeKeyFeature(index)}
                            className="ml-2 hover:text-red-500"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-end pt-4">
                  <Button size="lg">Add Product</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <Card>
              <CardHeader>
                <CardTitle>Inventory Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Inventory management section coming soon...
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
