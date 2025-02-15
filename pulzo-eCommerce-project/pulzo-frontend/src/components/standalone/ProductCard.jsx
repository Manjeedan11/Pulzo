import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CircleCheck, Eye } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/lib/features/cartSlice";
import { toggleFavorite } from "@/lib/features/favoriteSlice";
import { useToast } from "@/hooks/use-toast";

function ProductCard(props) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorite.value);
  const isFavorite = favorites.some((item) => item._id === props._id);
  const { toast } = useToast();

  const handleClick = (e) => {
    dispatch(
      addToCart({
        _id: props._id,
        name: props.name,
        price: props.price,
        image: props.image,
        synopsis: props.synopsis,
      })
    );

    toast({
      description: (
        <div className="flex items-center space-x-2">
          <CircleCheck className="w-5 h-5 text-green-800" />
          <span className="font-medium text-sm">Item added to cart</span>
        </div>
      ),
      duration: 2000,
      className:
        "bg-green-100 text-green-800 rounded-lg p-4 shadow-md transition-opacity opacity- duration-500 ease-in-out transform",
    });
  };

  const toggleFavoriteHandler = (e) => {
    dispatch(
      toggleFavorite({
        _id: props._id,
        name: props.name,
        price: props.price,
        image: props.image,
        description: props.description,
      })
    );

    toast({
      description: (
        <div className="flex items-center space-x-2">
          <CircleCheck className="w-5 h-5 text-pink-800" />
          <span className="font-medium text-sm">
            {isFavorite ? "Removed from favorites" : "Added to favorites"}
          </span>
        </div>
      ),
      duration: 2000,
      className:
        "bg-pink-100 text-pink-800 rounded-lg p-4 shadow-md transition-opacity duration-500 ease-in-out transform",
    });
  };

  return (
    <Card className="border-none">
      <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center relative">
        <img src={props.image} className="w-full h-full object-cover" />
        <div className="absolute top-4 left-4 cursor-pointer z-10 text-blue-400">
          <Eye />
        </div>
        <div
          className="absolute top-4 right-4 cursor-pointer z-10 text-red-500"
          onClick={toggleFavoriteHandler}
        >
          <Heart fill={isFavorite ? "red" : "none"} className="w-6 h-6" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="block text-2xl font-semibold">{props.name}</span>
        <span className="block font-semibold">${props.price}</span>
      </div>
      <div className="text-sm">
        <p className="text-sm">{props.synopsis}</p>
      </div>
      <div className="mt-2">
        <Button
          className=" bg-white border-2 border-black text-black px-4 py-1 text-lg rounded-lg mt-2 font-medium hover:bg-black hover:text-white transition duration-200 ease-in-out"
          onClick={handleClick}
        >
          Add to Cart
        </Button>
      </div>
    </Card>
  );
}

export default ProductCard;
