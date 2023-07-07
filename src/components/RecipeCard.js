import { useRecipe } from "../context/RecipeContext";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

export const RecipeCard = () => {
  const {
    state: { recipes }
  } = useRecipe();

  return (
    <div>
      {recipes.map((item) => {
        const { name, imageUrl, cuisine } = item;
        return (
          <div className="recipe-card">
            <Link to={`/${item.id}`}>
              <img src={imageUrl} alt="recipe" width="300px" height="300px" />
              <h4>Name: {name} </h4>
              <p> Cuisine: {cuisine} </p>
              <p> Ingredients: see recipe </p>
              <p> Instructions: see recipe </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
