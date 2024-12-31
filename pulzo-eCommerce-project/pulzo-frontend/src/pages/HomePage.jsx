import NavBar from "@/NavBar";
import Hero from "@/Hero";
import Products from "@/Products";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function HomePage() {
  const name = "";
  //const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [favoritesCount, setFavoritesCount] = useState([0]);

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

  const cart = useSelector((state) => state.cart.value);

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

  useEffect(() => {
    setFavoritesCount(favorites.length);
  }, [favorites]);

  return (
    <div>
      <NavBar
        name={name}
        cartCount={getCartQuantity()}
        favoritesCount={favoritesCount}
      />
      <Hero />
      <Products handleFavorites={handleFavorites} />
    </div>
  );
}

export default HomePage;
