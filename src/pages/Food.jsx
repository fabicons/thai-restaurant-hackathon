import {useState, useEffect} from 'react';
import FoodCard from '../components/FoodCard.jsx';

export default  function Food () {
	// state that stores all meals from the API
	const [allMeals, setAllMeals] = useState([])

	useEffect(() => {
		const fetchRecipes = async () => {
			const api = await fetch(
				`https://api.spoonacular.com/recipes/informationBulk?ids=663157,663126,663166,663113,645541,663151,663108,645474,663078&apiKey=${process.env.REACT_APP_API_KEY}`
			)
			const data = await api.json()

			setAllMeals(data)
			console.log(data)
		}
		fetchRecipes()
	}, [])

	return (
		<div>
			<h3>Our food menu</h3>
			{allMeals ? (
				allMeals.map((recipe) => {
					return <FoodCard recipe={recipe}/>
				})
			) : (
            <p>Is Loading...</p>
		
			)}
		</div>
	)
}
