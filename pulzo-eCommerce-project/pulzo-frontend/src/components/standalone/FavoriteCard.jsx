import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { addToCart } from "@/lib/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const dispatch = useDispatch();
const favoritesCard = useSelector((state) => state.favorite.value);

const handleClick = (e) => {
  dispatch(
    addToCart({
      _id: props._id,
      name: props.name,
      price: props.price,
      image: props.image,
      description: props.description,
    })
  );
};

function FavoriteCard() {
  return (
    <div>
      {favoritesCard.map((item) => (
        <Card className="border-none">
          <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center relative">
            <img
              src={item.product.image}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="block text-2xl font-semibold">
              {item.product.name}
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default FavoriteCard;

/*
<Card className="border-none">
      <div className="bg-gray-50 rounded-lg p-4 flex justify-center items-center relative">
        <img src={props.image} className="w-full h-full object-cover" />
      </div>
      <div className="flex items-center justify-between">
        <span className="block text-2xl font-semibold">{props.name}</span>
        <span className="block font-semibold">${props.price}</span>
      </div>
      <div className="text-sm">
        <p className="text-sm">{props.description}</p>
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
*/
