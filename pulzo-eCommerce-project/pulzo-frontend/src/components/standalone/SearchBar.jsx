import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { TextAnimate } from "../magicui/text-animate";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useNavigate();
  const placeholders = [
    "Search for the latest gadgets – Try ‘Echo Dot’",
    "Search by category – Laptops, Mobiles & more",
    "Search for the best tech deals – Limited-time offers !",
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/shop/search?category=${query.trim()}`);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative w-full">
      {!query && !isFocused && (
        <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
          <TextAnimate
            variant="fadeIn"
            duration={0.8}
            delay={0.2}
            className="text-gray-400 text-xs"
            key={placeholderIndex}
          >
            {placeholders[placeholderIndex]}
          </TextAnimate>
        </div>
      )}

      <Input
        className="w-[409px] pr-20 pl-[22px] rounded-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />

      <Button
        className="absolute right-0 top-0 h-full bg-gray-400 rounded-full"
        onClick={handleSearch}
      >
        <Search />
      </Button>
    </div>
  );
}

export default SearchBar;
