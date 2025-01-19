import ShippingForm from "@/components/standalone/ShippingForm";

function CheckOutPage() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-semibold ml-11">Checkout</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <ShippingForm />
        </div>
      </div>
    </div>
  );
}

export default CheckOutPage;
