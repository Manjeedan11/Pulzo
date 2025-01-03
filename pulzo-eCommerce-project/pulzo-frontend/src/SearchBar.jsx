import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="relative">
      <Input className="w-100 pr-12 rounded-full" placeholder="Search" />
      <Button className="absolute right-0 top-0 h-full bg-gray-400 rounded-full">
        <Search />
      </Button>
    </div>
  );
}

export default SearchBar;
