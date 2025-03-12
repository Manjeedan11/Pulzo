import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ShineBorder } from "@/components/magicui/shine-border";
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
import speakerGIF from "@/assets/featureDeal/speaker.gif";
import { SparklesText } from "@/components/magicui/sparkles-text";

function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");

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

  const searchedProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedAndSearchedProducts = [...searchedProducts].sort((a, b) => {
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

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      setSelectedCategoryId("ALL");
    }
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
    <div className="flex min-h-screen bg-background py-8 px-8 xl:px-16 mt-32">
      {/* Sidebar */}
      <div className="w-64 border-r p-6 hidden md:block">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search for products"
            className="pl-8 w-full font-poppins"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearch}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold font-poppins">
            Product Categories
          </h2>
          <Separator className="my-2" />
          <nav className="space-y-2">
            {[...categories, { _id: "ALL", name: "ALL" }].map((category) => (
              <button
                key={category._id}
                onClick={() => handleTabClick(category._id)}
                className={`flex items-center font-poppins justify-between text-sm hover:text-primary group ${
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
            <h1 className="text-3xl font-bold font-poppins">
              Explore Our Products
            </h1>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium font-poppins">Sort By:</span>
              <SortDropDown onSort={handleSort} />
            </div>
          </div>
          <Separator className="mt-4" />
        </div>

        <ShineBorder
          className="rounded-[20px] relative mb-8 bg-gradient-to-br from-[#2E0854] to-[#000000] overflow-hidden flex justify-center items-center py-8 px-4 xl:px-16 w-full max-w-full"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <div className="flex flex-col items-center text-center w-full">
            <div className="space-y-4 w-full">
              <div>
                <SparklesText
                  text="Black Friday Tech Deals"
                  className="text-6xl font-bold text-white font-poppins bg-gradient-to-br from-[#FF002B] from-35% to-[#8A2BE2] bg-clip-text leading-none tracking-tighter dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]"
                  style={{
                    WebkitTextFillColor: "transparent",
                  }}
                  sparklesCount={10}
                  colors={{ first: "#A07CFE", second: "#FE8FB5" }}
                />

                <p className="text-transparent font-poppins bg-gradient-to-br mt-4 from-[#FFD700] from-35% to-[#DAA520] bg-clip-text text-lg">
                  Up to 70% OFF on the Latest Gadgets & Accessories!
                </p>
              </div>
              <div className="flex flex-row items-center justify-center gap-4">
                <Button className="font-poppins bg-primary pointer-events-none z-10 transition-all duration-300 hover:bg-gradient-to-br hover:from-[#FF002B] hover:from-35% hover:to-[#FFD700] hover:text-white">
                  Shop Now
                </Button>
                <span className="text-gray-400 font-poppins uppercase tracking-wide">
                  Limited-Time Offer
                </span>
              </div>
            </div>
          </div>
        </ShineBorder>

        <ProductCards
          products={sortedAndSearchedProducts}
          gridClassName="grid-cols-3"
        />
      </div>
    </div>
  );
}

export default ShopPage;
