import NavBar from "./NavBar"
import Hero from "./Hero"
import ProductCard from "./ProductCard";

function App() {
  const name = "Manjeedan";
  const cartCount = 0;
  
  return (
    <>
    <NavBar name={name} cartCount={cartCount}/>
    <Hero/>
    <ProductCard/>
    </>
  )
}

export default App
