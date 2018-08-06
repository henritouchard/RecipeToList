import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';

import '../styles/App.css';

class RecipesToList extends Component {
  render() {
    return (
        <div className="col-sm-12 grid">
          {this.props.recipeReducer.recipes &&
          this.props.recipeReducer.recipes.map((recipe, key) => {
            return (
                <div className="col-sm-5 col-md-3" style={{ padding: "10px" }} key={key}>
                  <Link to={"/recipe/"+(recipe.recipe_id - 1)}>
                  <div className="recipe-card" style={{ margin: "0 auto", float:"none" }}>
                    <img className="recipe-img"
                         src={require('../assets/images/' + recipe.image_name)}
                         alt={recipe.title}/>
                    <div className="card-body">
                      <h5 className="card-title">{recipe.title}</h5>
                    </div>
                  </div>
                  </Link>
                </div>
            );
          })}
        </div>
    );
  }
}

export default connect(state => state)(RecipesToList);
