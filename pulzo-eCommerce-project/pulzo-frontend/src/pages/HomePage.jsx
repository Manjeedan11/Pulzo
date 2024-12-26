import NavBar from "@/NavBar";
import Hero from "@/Hero";
import Products from "@/Products";
import { useState } from "react";

function HomePage() {
  const name = "Manjeedan";
  const cartCount = 0;

  return (
    <div>
      <NavBar name={name} cartCount={cartCount} />
      <Hero />
      <Products />
    </div>
  );
}

export default HomePage;
