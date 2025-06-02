import { ShoppingCart, Heart, Search } from "lucide-react";
import propTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SearchBar from "./SearchBar";
import NotificationPopOver from "./NotificationPopOver";
import { useSelector } from "react-redux";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/clerk-react";

function NavBar(props) {
  const cart = useSelector((state) => state.cart.value);
  const favorite = useSelector((state) => state.favorite.value);
  const { user } = useUser();
  const navigate = useNavigate();

  const getCartQuantity = () => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    return count;
  };

  const handleAccountClick = () => {
    if (user?.publicMetadata?.role === "admin") {
      navigate("/admin");
    } else {
      navigate("/account");
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-lg rounded-lg flex items-center justify-between py-6 px-8 xl:px-16 z-50">
      <div className="flex gap-x-16 m-5 mr-16 -ml-1">
        <a className="flex items-center font-semibold text-3xl" href="/">
          tECHnOcaRT
        </a>
        <div className="flex items-center gap-4 font-poppins">
          <a href="/">Home</a>
          <Link to="/shop"></Link>
          <a href="/shop">Shop</a>
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <Link to="/shop/cart" className="flex items-center gap-4 relative">
            <div className="flex items-center gap-2">
              <ShoppingCart />
              <p className="text-lg">{getCartQuantity()}</p>
            </div>
          </Link>
        </div>
        <div>
          <Link
            to="/shop/favorites"
            className="flex items-center gap-4 relative"
          >
            <div className="flex items-center gap-2">
              <Heart className="cursor-pointer z-10 text-bl" />
              <p className="text-lg">{favorite.length}</p>
            </div>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <NotificationPopOver />
        </div>

        <SignedOut>
          <div className="flex items-center gap-4 font-poppins">
            <Link to="/sign-in" className=" text-primary ">
              Sign In
            </Link>
            <Link to="/sign-up" className=" text-primary ">
              Sign Up
            </Link>
          </div>
        </SignedOut>

        <SignedIn>
          <UserButton />
          <button onClick={handleAccountClick} className="text-primary">
            {user?.firstName || "Account"}
          </button>
        </SignedIn>
      </div>
    </nav>
  );
}

export default NavBar;
