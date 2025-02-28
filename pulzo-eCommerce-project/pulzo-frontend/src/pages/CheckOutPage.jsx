import { useSelector } from "react-redux";
import ShippingForm from "@/components/standalone/ShippingForm";
import OrderSummary from "@/components/standalone/OrderSummary";
import { Navigate } from "react-router";
import { useCreateOrderMutation } from "@/lib/api";

function CheckoutPage() {
  const cart = useSelector((state) => state.cart.value);

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w-full px-8 xl:px-16 pt-32">
      <div className="flex items-center mt-8">
        <h1 className="text-3xl font-semibold mr-11">Checkout</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-2">
          <ShippingForm cart={cart} />
        </div>
        <div className="md:col-span-1">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
