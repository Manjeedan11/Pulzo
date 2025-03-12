import NavBar from "@/components/standalone/NavBar";
import Hero from "@/components/standalone/Hero";
import Products from "@/components/standalone/Products";

function App() {
  const name = "Manjeedan";
  const cartCount = 0;

  return (
    <>
      <NavBar name={name} cartCount={cartCount} />
      <Hero />
      <Products />
    </>
  );
}

export default App;
