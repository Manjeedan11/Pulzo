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
import { X, CircleCheck } from "lucide-react";
import { useState } from "react";
import { useCreateProductMutation, useGetCategoriesQuery } from "@/lib/api";
import { useToast } from "@/hooks/use-toast";

function AdminManagement() {
  const [formState, setFormState] = useState({
    name: "",
    categoryId: "",
    image: "",
    price: "",
    ratings: 0,
    stock: 0,
    synopsis: "",
    description: "",
  });
  const [keyFeatures, setKeyFeatures] = useState([]);
  const [currentFeature, setCurrentFeature] = useState("");
  const { data: categories = [] } = useGetCategoriesQuery();
  const [createProduct] = useCreateProductMutation();
  const { toast } = useToast();

  const handleInputChange = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  const addKeyFeature = () => {
    if (currentFeature.trim()) {
      setKeyFeatures([...keyFeatures, currentFeature.trim()]);
      setCurrentFeature("");
    }
  };

  const removeKeyFeature = (index) => {
    setKeyFeatures(keyFeatures.filter((_, i) => i !== index));
  };

  const handleSubmit = async () => {
    try {
      const productData = {
        ...formState,
        price: formState.price.toString(),
        ratings: Number(formState.ratings),
        stock: Number(formState.stock),
        keyFeatures,
        sold: 0, // Default value
      };

      await createProduct(productData).unwrap();
      // Reset form after successful submission
      setFormState({
        name: "",
        categoryId: "",
        image: "",
        price: "",
        ratings: 0,
        stock: 0,
        synopsis: "",
        description: "",
      });
      setKeyFeatures([]);
    } catch (error) {
      console.error("Failed to add product:", error);
    }
    toast({
      description: (
        <div className="flex items-center space-x-2">
          <CircleCheck className="w-5 h-5 text-green-800" />
          <span className="font-medium text-sm">
            Product added successfully
          </span>
        </div>
      ),
      duration: 2000,
      className:
        "bg-green-100 text-green-800 rounded-lg p-4 shadow-md transition-opacity opacity- duration-500 ease-in-out transform",
    });
  };
  return (
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
                <Input
                  id="productName"
                  value={formState.name}
                  placeholder="Enter product name"
                  onChange={(e) => handleInputChange("name", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Product Category</Label>
                <Select
                  value={formState.categoryId}
                  onValueChange={(value) =>
                    handleInputChange("categoryId", value)
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.length > 0 ? (
                      categories.map((category) => (
                        <SelectItem key={category._id} value={category._id}>
                          {category.name}
                        </SelectItem>
                      ))
                    ) : (
                      <p className="px-2 py-1 text-gray-500">
                        No categories available
                      </p>
                    )}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">Image URL</Label>
                <Input
                  id="image"
                  placeholder="Enter image URL"
                  value={formState.image}
                  onChange={(e) => handleInputChange("image", e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  value={formState.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
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
                  value={formState.ratings}
                  onChange={(e) => handleInputChange("ratings", e.target.value)}
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
                  value={formState.stock}
                  onChange={(e) => handleInputChange("stock", e.target.value)}
                  type="number"
                  placeholder="Enter stock quantity"
                  min="0"
                />
              </div>

              <div className="col-span-2 space-y-2">
                <Label htmlFor="synopsis">Synopsis</Label>
                <Input
                  id="synopsis"
                  placeholder="Enter product synopsis"
                  value={formState.synopsis}
                  onChange={(e) =>
                    handleInputChange("synopsis", e.target.value)
                  }
                />
              </div>

              <div className="col-span-2 space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formState.description}
                  onChange={(e) =>
                    handleInputChange("description", e.target.value)
                  }
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
              <Button size="lg" onClick={handleSubmit}>
                Add Product
              </Button>
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
  );
}

export default AdminManagement;
