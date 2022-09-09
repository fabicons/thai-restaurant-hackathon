import { useState, useEffect } from "react";
import FoodCard from "../components/FoodCard.jsx";
import { allFood } from "../libs/allFood.js";
import CartContext from "../components/CartContext";
import { useContext } from "react";

export default function Food() {
  // state that stores all meals from the API
  const [allMeals, setAllMeals] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  useEffect(() => {
    // const fetchRecipes = async () => {
    // 	const api = await fetch(
    // 		`https://api.spoonacular.com/recipes/informationBulk?ids=663157,663126,663166,663113,645541,663151,663108,645474,663078&apiKey=${process.env.REACT_APP_API_KEY}`
    // 	)
    // 	const data = await api.json()

    // 	setAllMeals(data)
    // 	console.log(data)
    // }
    // fetchRecipes()
    setAllMeals(allFood);
  }, []);

  return (
    <div>
      <h3>Our food menu</h3>
      {allMeals ? (
        allMeals.map((recipe) => {
          return (
            <FoodCard
              recipe={recipe}
              key={recipe.id}
              setCart={setCart}
              cart={cart}
            />
          );
        })
      ) : (
        <p>Is Loading...</p>
      )}
    </div>
  );
}
