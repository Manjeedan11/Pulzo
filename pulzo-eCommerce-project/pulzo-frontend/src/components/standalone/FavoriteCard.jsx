import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { addToCart } from "@/lib/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "@/lib/features/favoriteSlice";

function FavoriteCard() {
  const dispatch = useDispatch();
  const favoritesCard = useSelector((state) => state.favorite.value);

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
  };

  const toggleFavoriteHandler = (item) => {
    dispatch(toggleFavorite(item));
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
