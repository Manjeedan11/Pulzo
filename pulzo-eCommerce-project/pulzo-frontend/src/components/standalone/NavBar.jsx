import { ShoppingCart, Heart, Search } from "lucide-react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import NotificationPopOver from "./NotificationPopOver";
import { useSelector } from "react-redux";

function NavBar(props) {
  const cart = useSelector((state) => state.cart.value);
  const favorite = useSelector((state) => state.favorite.value);

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  return (
    <nav className="flex items-center justify-between py-8 px-8 xl:px-16">
      <div className="flex gap-x-16">
        <a className="font-semibold text-3xl" href="/">
          ρυℓzσ
        </a>
        <div className="flex items-center gap-4">
          <a href="/">Home</a>
          <a href="/shop">Shop</a>
          <SearchBar />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <a href="/cart" className="flex items-center gap-4 relative">
            <div className="flex items-center gap-2">
              <ShoppingCart />
              <p className="text-lg">{getCartQuantity()}</p>
            </div>
          </a>
        </div>
        <div>
          <a href="/favorites" className="flex items-center gap-4 relative">
            <div className="flex items-center gap-2">
              <Heart className="cursor-pointer z-10 text-bl" />
              <p className="text-lg">{favorite.length}</p>
            </div>
          </a>
        </div>
        <div className="flex items-center gap-2">
          <NotificationPopOver />
        </div>
        {props.name ? (
          <p>Hi, {props.name}</p>
        ) : (
          <div className="flex items-center gap-4">
            <Link to="/sign-in" className=" text-primary ">
              Sign In
            </Link>
            <Link to="/sign-up" className=" text-primary ">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
