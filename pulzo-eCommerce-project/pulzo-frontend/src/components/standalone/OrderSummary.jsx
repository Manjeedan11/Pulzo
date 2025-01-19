import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

function OrderSummary() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <img className="rounded-md"></img>
            <div>
              <h3 className="font-semibold">OrderName</h3>
              <p className="text-sm text-gray-500">Order Description</p>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span>Price:</span>
              <span>$</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total:</span>
              <span>$</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default OrderSummary;
