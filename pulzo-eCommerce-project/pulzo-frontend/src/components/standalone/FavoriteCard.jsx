import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CircleCheck } from "lucide-react";
import { addToCart } from "@/lib/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/lib/features/favoriteSlice";
import { useToast } from "@/hooks/use-toast";

function FavoriteCard() {
  const dispatch = useDispatch();
  const favoritesCard = useSelector((state) => state.favorite.value);
  const { toast } = useToast();

  const handleClick = (item) => {
    dispatch(
      addToCart({
        _id: item._id,
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
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
        "bg-red-100 text-red-800 rounded-lg p-4 shadow-md transition-opacity opacity- duration-500 ease-in-out transform",
    });
  };

  const toggleFavoriteHandler = (item) => {
    const isFavorite = favoritesCard.some(
      (favorite) => favorite._id === item._id
    );

    dispatch(toggleFavorite(item));

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
    <div className="flex flex-wrap gap-12">
      {favoritesCard.length === 0 ? (
        <p className="text-center w-full text-xl font-semibold">
          No favorites added
        </p>
      ) : (
        favoritesCard.map((item) => (
          <Card key={item._id} className="w-[300px] border-none">
            <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center relative">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-lg"
              />
              <div
                className="absolute top-4 right-4 cursor-pointer z-10 text-red-500"
                onClick={() => toggleFavoriteHandler(item)}
              >
                <Heart fill="red" className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4">
              <div className="flex items-center justify-between">
                <span className="block text-lg font-semibold">{item.name}</span>
                <span className="block font-semibold">${item.price}</span>
              </div>
              <p className="text-sm mt-2">{item.description}</p>
            </div>
            <div className="mt-4">
              <Button
                className="bg-white border-2 border-black text-black px-4 py-1 text-lg rounded-lg font-medium hover:bg-black hover:text-white transition"
                onClick={() => handleClick(item)}
              >
                Add to Cart
              </Button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

export default FavoriteCard;
