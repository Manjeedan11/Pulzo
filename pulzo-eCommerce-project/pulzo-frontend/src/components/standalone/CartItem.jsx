import {
  removeFromCart,
  addToCart,
  decreaseQuantity,
} from "@/lib/features/cartSlice";
import { Trash2, CircleCheck } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@/hooks/use-toast";

function CartItem(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);
  const { toast } = useToast();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));

    toast({
      description: (
        <div className="flex items-center space-x-2">
          <CircleCheck className="w-5 h-5 text-green-800" />
          <span className="font-medium text-sm">Item removed from cart</span>
        </div>
      ),
      duration: 2000,
      className:
        "bg-green-100 text-green-800 rounded-lg p-4 shadow-md transition-opacity opacity- duration-500 ease-in-out transform",
    });
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <p className="text-center w-full text-xl font-semibold">
          Cart is empty
        </p>
      ) : (
        cartItems.map((item) => (
          <div
            key={item.product._id}
            className="flex items-center justify-between border-b border-gray-200 py-4"
          >
            <div className="flex items-center">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-16 h-16 object-cover mr-4 rounded-lg"
              />
              <div>
                <h3 className="text-lg font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">${item.product.price}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(decreaseQuantity(item.product._id))}
                className="px-3 py-1 bg-gray-200 rounded-l-full hover:bg-gray-300 transition duration-300"
              >
                -
              </button>
              <span className="px-4 py-1 bg-gray-100 rounded-full">
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(addToCart(item.product))}
                className="px-3 py-1 bg-gray-200 rounded-r-full hover:bg-gray-300 transition duration-300"
              >
                +
              </button>
              <button
                className="ml-4 text-red-500 hover:text-red-700 rounded-full px-3 py-1 bg-red-100 hover:bg-red-200 transition duration-300"
                onClick={() => handleRemove(item.product._id)}
              >
                <Trash2 className="text-red-500" />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default CartItem;
