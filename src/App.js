import Pages from "./pages/Pages.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Food from "./pages/Food.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from "./components/Footer.jsx";
import "./index.css";
import Cart from "./pages/Cart.jsx";
import CartContext from "./components/CartContext.jsx";
import { useState } from "react";


function App() {
  const [cart, setCart] = useState([])
  
  return (
    <div className="App">
    <CartContext.Provider value={[cart, setCart]}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
