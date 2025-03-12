import { useSelector } from "react-redux";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

function OrderSummary({ cart }) {
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div>
      <Card>
        <CardHeader className="flex justify-between items-right">
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.map((item) => (
            <div
              key={item.product._id}
              className="flex items-center border-b pb-2 mb-2"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="rounded-md w-16 h-16 object-cover mr-4"
              />
              <div className="flex flex-1 justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">{item.product.name}</h3>
                  <p className="text-sm">Qty: {item.quantity}</p>
                </div>
                <span className="font-medium">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="font-medium">Subtotal:</span>
              <span className="font-medium">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderSummary;
