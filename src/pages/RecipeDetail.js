import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useRecipe } from "../context/RecipeContext";
import "./RecipeDetail.css";

export const RecipeDetail = () => {
  const {
    state: { recipes },
    dispatch
  } = useRecipe();

  const { recipeId } = useParams();

  const selectedRecipe = recipes.find((item) => item.id === recipeId);

  const handleDelete = () => {
    dispatch({ type: "DELETE_RECIPE, payload: recipeId" });
  };
  return (
    <div>
      <Link to="/">
        <h1> Home </h1>
      </Link>
      <div className="recipe-detail-body">
        <div>
          <img src={selectedRecipe?.imageUrl} alt="recipe" width="700px" />
        </div>

        <div>
          <h2> Cuisine: {selectedRecipe?.cuisine}</h2>
          <p> Ingredients: {selectedRecipe?.ingredients}</p>
          <p> Instructions: {selectedRecipe?.instructions}</p>
          <button onClick={handleDelete}> Delete Recipe </button>
        </div>
      </div>
    </div>
  );
};
