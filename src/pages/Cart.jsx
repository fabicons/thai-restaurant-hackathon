import ShoppingCart from "../components/ShoppingCart";
import CartContext from "../components/CartContext";
import { useContext } from "react";

function Cart() {
  const [cart, setCart] = useContext(CartContext)
  
  return (
    <div>
    {cart.map(item => <li>{item}</li>)  }
    </div>
  );
}

export default Cart;
