import NavBar from "@/components/standalone/NavBar";
import Hero from "@/components/standalone/Hero";
import Products from "@/components/standalone/Products";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const name = "";
  //const [cart, setCart] = useState([]);
  //const [favorites, setFavorites] = useState([]);
  //const [favoritesCount, setFavoritesCount] = useState([0]);

  /*const handleAddToCart = (product) => {
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
  };*/

  /*const handleFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((item) => item._id === product._id);
      if (isFavorite) {
        return prevFavorites.filter((item) => item._id !== product._id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  useEffect(() => {
    setFavoritesCount(favorites.length);
  }, [favorites]); */

  return (
    <div>
      <Hero />
      <Products />
    </div>
  );
}

export default HomePage;
