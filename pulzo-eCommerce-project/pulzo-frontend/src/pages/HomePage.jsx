import NavBar from "@/NavBar";
import Hero from "@/Hero";
import Products from "@/Products";
import { useState } from "react";

function HomePage() {
  const name = "Manjeedan";
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
      const isFavorite = prevFavorites.some((item) => item._id === product._id);
      if (isFavorite) {
        return prevFavorites.filter((item) => item._id !== product._id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  return (
    <div>
      <NavBar
        name={name}
        cartCount={getCartQuantity()}
        favoritesCount={favorites.length}
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
