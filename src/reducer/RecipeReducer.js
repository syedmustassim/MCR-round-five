export const initialState = {
  recipes: []
};

export const RecipeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return { ...state, recipes: [...state.recipes, action.payload] };

    case "DELETE_RECIPE":
      return {
        ...state,
        recipes: state.recipes.filter((item) => item.id !== action.payload)
      };

    default:
      return state;
  }
};
