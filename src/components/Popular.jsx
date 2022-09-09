import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide, SplideStyle } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  // state that stores all meals from the API
  const [allMeals, setAllMeals] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/informationBulk?ids=663157,663126,663166,663113,645541,663151,663108,645474,663078&apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const data = await api.json();

      setAllMeals(data);
      console.log(data);
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <Wrapper>
        <h3>Our menu</h3>
        {allMeals ? (
          allMeals.map((recipe) => {
            return <p>{recipe.title}</p>;
          })
        ) : (
          <p>Loading...</p>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Gradient = styled.div`
  z-index: 3;
  position: "absolute";
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
`;

export default Popular;
