function CartSummary(props) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between mb-2">
        <span>Sub Total:</span>
        <span>$</span>
      </div>
      <div className="flex justify-between mb-4">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between text-xl font-semibold">
        <span>Total:</span>
        <span>$</span>
      </div>
      <div className="mt-2 text-gray-600">Total items: {props.totalItems}</div>
      <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition duration-300">
        Proceed to Checkout
      </button>
    </div>
  );
}

export default CartSummary;
