import { useSelector } from "react-redux";
import CheckOutPage from "./OrderSummary";
import { Link } from "react-router";

function CartSummary() {
  const cartItems = useSelector((state) => state.cart.value);
  const total = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.product.price) * item.quantity,
    0
  );
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Sub Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between text-xl font-semibold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="mt-2 text-gray-600">Total items: {totalItems}</div>
      <Link
        to="/shop/cart/checkout"
        className="w-full mt-6 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300 block text-center"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default CartSummary;
