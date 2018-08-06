import React, {Component} from 'react';
import {connect} from 'react-redux'

import RecipeRight from '../components/RecipeRight';

import {setIngredients} from '../RecipeReducer/action';
import '../styles/App.css';

class RecipePage extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.recipeId;
    const servings = this.props.cart[id] ? this.props.cart[id].servings : props.recipes[id].servings;
    this.state = {
      ingredients: this.props.recipes[id].ingredients,
      servings,
      previousServings: servings
    }
  }

  onUpdateCard = (ingredients) => {
    this.props.dispatch(setIngredients(ingredients.filter(ingredient => {
      return !!ingredient.inCart;
    }), this.props.match.params.recipeId, this.state.servings));
    this.props.history.push('/');
  };

  addServings() {
    this.setState({
      servings: this.state.servings + 1,
      previousServings: this.state.servings
    });
  }

  removeServings() {
    if (this.state.servings > 1)
      this.setState({
        servings: this.state.servings - 1,
        previousServings: this.state.servings
      });
  }

  getPortions() {
    const {ingredients} = this.state;
    return ingredients.map((ingredient) => {
      let portion;
      // Process for non united ingredients (we won't buy a half advocado).
      if (!ingredient.unit)
        portion = this.state.servings * ingredient.quantity / this.state.previousServings;
      // Processing for united values.
      else
        portion = this.state.servings * ingredient.quantity / this.state.previousServings;
      // Doesn't display decimals if 0 and max 2 decimals if not.
      ingredient.quantity = portion % 1 === 0 ? portion.toFixed(0) : portion.toFixed(2);

      return ingredient;
    });
  }

  render() {
    const recipeId = this.props.match.params.recipeId;
    const selectedRecipe = this.props.recipes[recipeId];
    const ingredients = this.getPortions();

    return (
        <div className="container well" align="center">
          <div className="row">
            <h1 className="titles">{selectedRecipe.title}</h1>
            <div className="col-sm-6" align="left" style={{paddingTop: "20px"}}>
              <img className="img-thumbnail" src={require('../assets/images/' + selectedRecipe.image_name)} alt={selectedRecipe.image_name}/>
            </div>
            <div className="col-sm-6">
              <RecipeRight
                  name={selectedRecipe.name}
                  recipeId={recipeId}
                  servings={this.state.servings}
                  ingredients={ingredients}
                  addServings={() => this.addServings()}
                  removeServings={() => this.removeServings()}
                  onUpdateCard={this.onUpdateCard}/>
            </div>
            <div style={{padding: "10px 50px 0", marginTop: "20px"}}>
              <h2 className="titles" style={{textAlign: "center", paddingTop: "20px"}}>Instructions</h2>
              <p style={{paddingTop: "10px", fontSize: "1.4em", textAlign: "justify"}}>{selectedRecipe.instructions}</p>
            </div>
          </div>
        </div>
    );
  }
}

export default connect(state => state.recipeReducer)(RecipePage);
