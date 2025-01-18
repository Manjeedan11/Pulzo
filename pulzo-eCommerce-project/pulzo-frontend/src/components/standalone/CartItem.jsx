import { removeFromCart } from "@/lib/features/cartSlice";
import { Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

function CartItem(props) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.value);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="">
      {cartItems.map((item) => (
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
          <div className="flex items-center">
            <span className="px-4 py-1 bg-gray-100 rounded-full">
              {item.quantity}
            </span>
            <button
              className="ml-4 text-red-500 hover:text-red-700 rounded-full px-3 py-1 bg-red-100 hover:bg-red-200 transition duration-300"
              onClick={() => handleRemove(item.product._id)}
            >
              <Trash2 className="text-red-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CartItem;

/*

<div className="flex items-center">
        <img
          src={props.image}
          alt={props.name}
          className="w-16 h-16 object-cover mr-4 rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold">{props.name}</h3>
          <p className="text-gray-600">${props.price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <span className="px-4 py-1 bg-gray-100 rounded-full">
          {props.quantity}
        </span>
        <button
          className="ml-4 text-red-500 hover:text-red-700 rounded-full px-3 py-1 bg-red-100 hover:bg-red-200 transition duration-300"
          onClick={handleClick}
        >
          <Trash2 className=" text-red-500" />
        </button>
      </div> 
      
      flex items-center justify-between border-b border-gray-200 py-4*/
