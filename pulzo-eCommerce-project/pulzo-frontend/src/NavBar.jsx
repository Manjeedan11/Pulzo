import { ShoppingCart, Heart, Search } from "lucide-react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "./components/ui/button";
import SearchBar from "./SearchBar";

function NavBar(props) {
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
            <p className="text-lg">{props.cartCount}</p>
            <div className="flex items-center gap-2">
              <ShoppingCart />
              Cart
            </div>
          </a>
        </div>
        <div>
          <a href="/favorites" className="flex items-center gap-4 relative">
            <div className="flex items-center gap-2">
              <Heart className="cursor-pointer z-10 text-bl" />
              Favorites
              <p className="text-lg">{props.favoritesCount}</p>
            </div>
          </a>
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
