import { useSelector } from "react-redux";

function CartPage() {
  const cart = useSelector((state) => state.cart.value);
  console.log(cart);

  return (
    <main className="px-8">
      <h2 className="text-4xl font bold">My Cart</h2>
      <div>{JSON.stringify(cart)}</div>
    </main>
  );
}

export default CartPage;
