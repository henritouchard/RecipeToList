import { createStore, combineReducers, applyMiddleware } from 'redux';
import recipeReducer from './RecipeReducer/reducer';
import thunk from 'redux-thunk';


const reducer = combineReducers({
  recipeReducer
});

const store = createStore(
    reducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;