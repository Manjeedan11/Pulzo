import NavBar from "@/NavBar";
import Hero from "@/Hero";
import Products from "@/Products";
import { useState } from "react";

function HomePage() {
  const name = "Manjeedan";
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {};

  return (
    <div>
      <NavBar name={name} cartCount={cartCount} />
      <Hero />
      <Products handleAddToCart={handleAddToCart} />
    </div>
  );
}

export default HomePage;
