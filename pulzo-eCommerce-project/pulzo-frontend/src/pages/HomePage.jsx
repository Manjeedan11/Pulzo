import NavBar from "@/NavBar";
import Hero from "@/Hero";
import Products from "@/Products";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const name = "Manjeedan";
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {};

  return (
    <div>
      <NavBar
        name={name}
        cartCount={getCartQuantity()}
        favoritesCount={favorite.length}
      />
      <Hero />
      <Products />
    </div>
  );
}

export default HomePage;
