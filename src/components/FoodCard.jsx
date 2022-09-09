import React from 'react'

export default function FoodCard({recipe}) {
  return (
    <div>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title}/>
        <p>{recipe.extendedIngrdients}</p>
        <ul>
            {recipe.extendedIngredients.map(ingredient => 
  
                <li>{ingredient.name}</li>
            )}
        </ul>

    </div>
  )
}
