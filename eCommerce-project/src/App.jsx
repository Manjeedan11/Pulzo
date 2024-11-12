import NavBar from "./NavBar"
import Hero from "./Hero"

function App() {
  const name = "Manjeedan";
  const cartCount = 0;
  
  return (
    <>
    <NavBar name={name} cartCount={cartCount}/>
    <Hero/>
    </>
  )
}

export default App
