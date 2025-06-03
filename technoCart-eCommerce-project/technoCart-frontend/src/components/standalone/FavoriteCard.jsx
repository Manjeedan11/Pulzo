import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, CircleCheck, Eye } from "lucide-react";
import { addToCart } from "@/lib/features/cartSlice";
import { setPreview } from "@/lib/features/previewSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/lib/features/favoriteSlice";
import { useToast } from "@/hooks/use-toast";
import { InteractiveHoverButton } from "../magicui/interactive-hover-button";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";

function FavoriteCard() {
  const dispatch = useDispatch();
  const favoritesCard = useSelector((state) => state.favorite.value);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const handleClick = (item) => {
    if (!isSignedIn) {
      return navigate("/sign-in");
    }

    dispatch(
      addToCart({
        _id: item._id,
        name: item.name,
        price: item.price,
        image: item.image,
        synopsis: item.synopsis,
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

  const handlePreview = (item) => {
    dispatch(
      setPreview({
        _id: item._id,
        name: item.name,
        price: item.price,
        image: item.image,
        description: item.description,
        ratings: item.ratings,
        keyFeatures: item.keyFeatures,
        stock: item.stock,
        sold: item.sold,
      })
    );
    navigate("/shop/product/preview");
  };

  return (
    <div className="grid grid-cols-4 gap-10 mt-4 font-poppins">
      {favoritesCard.length === 0 ? (
        <p className="text-center w-full text-xl font-semibold col-span-4">
          No favorites added
        </p>
      ) : (
        favoritesCard.map((item) => (
          <Card key={item._id} className=" border-none">
            <div className="bg-gray-50 rounded-[30px] p-4 flex justify-center items-center relative h-[300px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 left-4 cursor-pointer z-10 text-blue-400"
                onClick={() => handlePreview(item)}
              >
                <Eye />
              </div>
              <div
                className="absolute top-4 right-4 cursor-pointer z-10 text-red-500"
                onClick={() => toggleFavoriteHandler(item)}
              >
                <Heart fill="red" className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 font-poppins">
              <div className="flex items-center justify-between mt-4">
                <span className="block text-lg font-semibold">{item.name}</span>
                <span className="block font-semibold">${item.price}</span>
              </div>
              <p className="text-sm mt-2">{item.synopsis}</p>
            </div>
            <div className="mt-2">
              <InteractiveHoverButton
                className="font-poppins"
                onClick={() => handleClick(item)}
              >
                Add to Cart
              </InteractiveHoverButton>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}

export default FavoriteCard;

/*<Button
                className="bg-white border-2 border-black text-black px-4 py-1 text-lg rounded-lg font-medium hover:bg-black hover:text-white transition"
                onClick={() => handleClick(item)}
              >
                Add to Cart
              </Button> */
