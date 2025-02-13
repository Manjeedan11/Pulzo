import { Search, ChevronRight } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function ShopPage() {
  const categories = [
    "ALL",
    "Headphones",
    "Earbuds",
    "Speakers",
    "Mobile Phones",
    "Smart watches",
  ];

  const featuredProduct = {
    name: "Premium Wireless Headphones",
    description:
      "Experience crystal clear sound with advanced noise cancellation technology",
    price: 179,
    originalPrice: 249,
    image: "/placeholder.svg?height=300&width=300",
  };

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
            {categories.map((category) => (
              <a
                key={category}
                href="#"
                className="flex items-center justify-between text-sm hover:text-primary group"
              >
                <span>{category}</span>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8 px-4 xl:px-16">
        {/* Main Content Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
          <Separator className="mb-4" />
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Top Picks</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Sort By:</span>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-[150px]">
                    Best Match
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
                  <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Featured Product */}
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

        <section className="py-8 px-4 xl:px-16"></section>
      </div>
    </div>
  );
}

export default ShopPage;
