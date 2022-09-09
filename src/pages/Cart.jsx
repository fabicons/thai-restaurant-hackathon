import CartContext from '../components/CartContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

function Cart() {
	const [cart, setCart] = useContext(CartContext)
	console.log(cart)

	return (
		<div>
			{cart.map((item) => (
				<li>
					{item.title}: {`£ ${Math.floor(item.pricePerServing / 4 / 10)}`}
				</li>
			))}
			<Link to='/'>

				<button>Checkout</button>
			</Link>
		</div>
	)
}

export default Cart
