import NavBar from "./NavBar"
import Hero from "./Hero"
import Products from "./Products";

function App() {
  const name = "Manjeedan";
  const cartCount = 0;
  
  return (
    <>
    <NavBar name={name} cartCount={cartCount}/>
    <Hero/>
    <Products/>
    </>
  )
}

export default App
