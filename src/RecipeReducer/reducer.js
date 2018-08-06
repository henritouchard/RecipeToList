import { SET_INGREDIENTS, LOAD_RECIPES } from './consts';
import recipes from '../assets/recipes-data';

const initState = {
  cart: '',
  recipes: recipes
};

export default (state = initState, action) => {
  switch (action.type) {
    case SET_INGREDIENTS :
      return {...state, cart: {...state.cart, [action.payload.recipeId]: { 'ingredients': action.payload.ingredients, 'servings': action.payload.servings }}};
    case LOAD_RECIPES :
      return {...state, recipes: action.payload.recipes};
    default :
      return state
  }
}