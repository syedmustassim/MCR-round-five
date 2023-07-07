import { createContext, useContext, useReducer } from "react";
import { initialState, RecipeReducer } from "../reducer/RecipeReducer";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(RecipeReducer, initialState);
  return (
    <div>
      <RecipeContext.Provider value={{ state, dispatch }}>
        {children}
      </RecipeContext.Provider>
    </div>
  );
};

export const useRecipe = () => useContext(RecipeContext);
