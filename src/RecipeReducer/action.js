import { SET_INGREDIENTS } from './consts';

export const setIngredients = (ingredients, recipeId, servings) => {
  return {
      type: SET_INGREDIENTS,
      payload:  {ingredients, recipeId, servings}
    }
};