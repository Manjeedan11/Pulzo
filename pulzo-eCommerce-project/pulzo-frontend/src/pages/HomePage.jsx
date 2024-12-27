import NavBar from "@/NavBar";
import Hero from "@/Hero";
import Products from "@/Products";
import { useState } from "react";

function HomePage() {
  const name = null;
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState([0]);

  const handleAddToCart = (product) => {
    const foundItem = cart.find((item) => item.product._id === product._id);
    if (foundItem) {
      setCart(
        cart.map((cartItem) => {
          cartItem.product._id === product._id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        })
      );
    }
    setCart([...cart, { product: product, quantity: 1 }]);
  };

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  const handleFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const existingIndex = prevFavorites.findIndex(
        (item) => item._id === product._id
      );
      if (existingIndex >= 0) {
        setFavoritesCount((prev) => prev - 1);
        return prevFavorites.filter((item) => item._id !== product._id);
      } else {
        setFavoritesCount((prev) => prev + 1);
        return [...prevFavorites, product];
      }
    });
  };

  return (
    <div>
      <NavBar
        name={name}
        cartCount={getCartQuantity()}
        favoritesCount={favoritesCount}
      />
      <Hero />
      <Products
        handleAddToCart={handleAddToCart}
        handleFavorites={handleFavorites}
      />
    </div>
  );
}

export default HomePage;
