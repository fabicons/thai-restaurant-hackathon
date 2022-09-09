import CartContext from "../components/CartContext";
import { useContext } from "react";

function Cart() {
  const [cart, setCart] = useContext(CartContext);
  console.log(cart);

  return (
    <div>
      {cart.map((item) => (
        <li>
          {item.title}: {`£ ${Math.floor(item.pricePerServing / 4 / 10)}`}
        </li>
      ))}

      <button>Checkout</button>
    </div>
  );
}

export default Cart;
