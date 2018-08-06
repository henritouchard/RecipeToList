import React, {Component} from 'react';

import ToggleIngredient from './ToggleIngredient';
import ChangeServings from './ChangeServings';
import '../styles/App.css';

class RecipeRight extends Component {
  constructor(props){
    super(props);
    this.state = { ingredients: this.props.ingredients };
  }

  addToCart = (newIngredient) => {
    const ingredients = this.state.ingredients.map(ingredient => {
      if (ingredient.name === newIngredient.name) {
        ingredient['inCart'] = "inCart" in ingredient ? !ingredient['inCart'] : true;
        ingredient['recipeId'] = this.props.recipeId;
      }
      return ingredient;
    });
    this.setState({ingredients: ingredients});
  };

  render() {
    const {ingredients} = this.props;
    return (
        <div style={{margin: "10px 0 0"}}>
          <h3>Ingredients for <strong>{this.props.servings}</strong> servings
          </h3>
          <ChangeServings addServings={this.props.addServings} removeServings={this.props.removeServings}/>
          <div align="left" style={{fontSize: "1.3em"}}>
            {ingredients.map((ingredient, key) => <ToggleIngredient addToCart={this.addToCart} ingredient={ingredient} key={key} />) }
            <div align="center" style={{width: '100%'}}>
              <button
                  className="glyphicon glyphicon-shopping-cart btn btn-success rnd-btn"
                  title="Add to cart"
                  style={{
                    width: '100%',
                    lineHeight: "30px",
                    paddingBottom: '15px'
                  }}
                  onClick={() => this.props.onUpdateCard(this.state.ingredients)}
              >
                <span style={{marginLeft: '50px'}}>Add To Cart</span>
              </button>
            </div>
          </div>
        </div>
    );
  }
}

export default RecipeRight;
