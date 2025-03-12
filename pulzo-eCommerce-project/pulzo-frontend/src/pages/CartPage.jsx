import { useSelector } from "react-redux";
import CartItem from "@/components/standalone/CartItem";
import CartSummary from "@/components/standalone/CartSummary";

function CartPage() {
  return (
    <div className="container mx-auto px-8 xl:px-16 py-8 mt-32">
      <div className="flex gap-x-16 items-center">
        <h1 className="text-3xl font-semibold mb-6">Your Shopping Cart</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <CartItem />
          </div>
        </div>
        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}

export default CartPage;
