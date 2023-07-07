import { useState } from "react";
import { useRecipe } from "../context/RecipeContext";
import { v4 as uuid } from "uuid";
import "./Modal.css";

export const AddRecipeModal = () => {
  const { state, dispatch } = useRecipe();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddRecipe = () => {
    const ingredientsArray = ingredients.split(",").map((item) => item.trim());
    const instructionsArray = instructions
      .split("\n")
      .map((item) => item.trim());
    const newRecipe = {
      id: uuid(),
      imageUrl: imageUrl,
      name: name,
      cuisine: cuisine,
      ingredients: ingredientsArray,
      instructions: instructionsArray
    };

    dispatch({ type: "ADD_RECIPE", payload: newRecipe });
    setName("");
    setIngredients("");
    setInstructions("");
    setCuisine("");
    setImageUrl("");
    setIsOpen(false);
  };

  console.log(state);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}> Add Recipe </button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2> Add a new Recipe </h2>
            <div className="modal-body">
              <div className="modal-field">
                <label htmlFor="name"> Recipe Name: </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="modal-field">
                <label htmlFor="cuisine"> Cuisine: </label>
                <input
                  type="text"
                  id="cuisine"
                  value={cuisine}
                  onChange={(event) => setCuisine(event.target.value)}
                />
              </div>
              <div className="modal-field">
                <label htmlFor="ingredients"> Ingredients: </label>
                <textarea
                  id="ingredients"
                  value={ingredients}
                  onChange={(event) => setIngredients(event.target.value)}
                />
              </div>
              <div className="modal-field">
                <label htmlFor="instructions"> Instructions: </label>
                <textarea
                  id="instructions"
                  value={instructions}
                  onChange={(event) => setInstructions(event.target.value)}
                />
              </div>
              <div className="modal-field">
                <label htmlFor="imageUrl"> Add image link: </label>
                <input
                  type="url"
                  id="imageUrl"
                  value={imageUrl}
                  onChange={(event) => setImageUrl(event.target.value)}
                />
              </div>
              <button onClick={handleAddRecipe}> Save Recipe </button>
              <button onClick={() => setIsOpen(false)}> Cancel </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
