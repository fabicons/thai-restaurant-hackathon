import React from "react";
import styled from "styled-components";

export default function FoodCard({ recipe }) {
  return (
    <FoodCardContainer>
      <h3>{recipe.title}</h3>
      <FoodCardDetailsContainer>
        <FoodCardImg src={recipe.image} alt={recipe.title} />
        <div>
          <h3>Ingredients</h3>
          <ul>
            {recipe.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.name}</li>;
            })}
          </ul>
          <h3>Dietary Preferences</h3>
          <ul>
            {recipe.diets.map((diet) => {
              return <li>{diet}</li>;
            })}
          </ul>
          <p>{`£ ${Math.floor(recipe.pricePerServing / 4 / 10)}`}</p>
        </div>
      </FoodCardDetailsContainer>
    </FoodCardContainer>
  );
}

const FoodCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`;

const FoodCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 2rem;
`;

const FoodCardImg = styled.img`
  width: 25vw;
  height: 25vw;
`;
