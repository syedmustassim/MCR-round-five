import { AddRecipeModal } from "../components/AddRecipeModal";
import { RecipeCard } from "../components/RecipeCard";
import { useRecipe } from "../context/RecipeContext";

export const Home = () => {
  const {
    state: { recipes }
  } = useRecipe();

  return (
    <div>
      <h2> Welcome to Recipe Organizer</h2>
      <AddRecipeModal />
      {recipes.length > 0 ? (
        <div>
          <RecipeCard />
        </div>
      ) : (
        <h3> No recipes </h3>
      )}
    </div>
  );
};
