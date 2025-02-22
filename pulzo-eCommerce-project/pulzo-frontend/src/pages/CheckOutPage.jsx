import ShippingForm from "@/components/standalone/ShippingForm";
import OrderSummary from "@/components/standalone/OrderSummary";

function CheckOutPage() {
  return (
    <div className="w-full px-8 xl:px-16">
      <div className="flex items-center mt-8">
        <h1 className="text-3xl font-semibold mr-11">Checkout</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        <div className="md:col-span-2">
          <ShippingForm />
        </div>
        <div className="md:col-span-1">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
