import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Search,
  ChevronRight,
  Filter,
  ArrowUpNarrowWide,
  ArrowDownNarrowWide,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetCategoriesQuery, useGetProductsQuery } from "@/lib/api";
import { useState } from "react";
import ProductCards from "@/components/standalone/ProductCards";
import SortDropDown from "@/components/standalone/SortDropDown";

function ShopPage() {
  const featuredProduct = {
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal clear sound with advanced noise cancellation technology",
    price: 179,
    originalPrice: 249,
    image: "/placeholder.svg?height=300&width=300",
  };

  const {
    data: products,
    isLoading: isProductsLoading,
    isError: isProductsError,
    error: productsError,
  } = useGetProductsQuery();

  const {
    data: categories,
    isLoading: isCategoriesLoading,
    isError: isCategoriesError,
    error: categoriesError,
  } = useGetCategoriesQuery();

  const [selectedCategoryId, setSelectedCategoryId] = useState("ALL");
  const [sortOrder, setSortOrder] = useState("ASC");

  const filteredProducts =
    selectedCategoryId === "ALL"
      ? products || []
      : (products || []).filter(
          (product) => product.categoryId._id === selectedCategoryId
        );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    const priceA = parseFloat(a.price);
    const priceB = parseFloat(b.price);
    return sortOrder === "ASC" ? priceA - priceB : priceB - priceA;
  });

  const handleTabClick = (_id) => {
    setSelectedCategoryId(_id);
  };

  const handleSort = (order) => {
    setSortOrder(order);
  };

  if (isProductsLoading || isCategoriesLoading) {
    return <Skeleton className="h-80" />;
  }

  if (isProductsError || isCategoriesError) {
    return (
      <p className="text-red-500">{`${productsError?.message || ""} ${
        categoriesError?.message || ""
      }`}</p>
    );
  }

  return (
    <div className="flex min-h-screen bg-background py-8 px-8 xl:px-16 mt-5">
      {/* Sidebar */}
      <div className="w-64 border-r p-6 hidden md:block">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search for products" className="pl-8 w-full" />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Product Categories</h2>
          <Separator className="my-2" />
          <nav className="space-y-2">
            {[...categories, { _id: "ALL", name: "ALL" }].map((category) => (
              <button
                key={category._id}
                onClick={() => handleTabClick(category._id)}
                className={`flex items-center justify-between text-sm hover:text-primary group ${
                  selectedCategoryId === category._id ? "font-bold" : ""
                }`}
              >
                <span>{category.name}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8 px-4 xl:px-16">
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Explore Our Products</h1>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort By:</span>
              <SortDropDown onSort={handleSort} />
            </div>
          </div>
          <Separator className="mt-4" />
        </div>

        <Card className="mb-8 bg-[#2D1E1E] text-white">
          <div className="flex flex-col md:flex-row items-center p-6">
            #TODO: Image component
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{featuredProduct.name}</h2>
                <p className="text-gray-300">{featuredProduct.description}</p>
              </div>
              <div className="flex items-center gap-4">
                <Button className="bg-primary hover:bg-primary/90">
                  Buy ${featuredProduct.price}
                </Button>
                <span className="text-gray-400 line-through">
                  ${featuredProduct.originalPrice}
                </span>
              </div>
            </div>
          </div>
        </Card>

        <ProductCards products={sortedProducts} />
      </div>
    </div>
  );
}

export default ShopPage;
