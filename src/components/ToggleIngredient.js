import React from 'react';
import CheckBox from './CheckBox'

import '../styles/App.css';

const ToggleIngredient = ({addToCart, ingredient}) => {
  const quantity = ingredient.quantity > 0 ? (ingredient.quantity + ' ' + ingredient.unit) : '';
  return (
      <div className="row" style={{marginBottom: "15px"}}>
        <CheckBox
            ingredient={ingredient.name}
            value={{quantity: ingredient.quantity, unit: ingredient.unit}}
            toggle={(ingredient) => addToCart(ingredient)}
            isActivated={ingredient.inCart}/>
        <label
            className="col-sm-10 col-xs-9"
            style={{marginTop: "7px"}}>
          {ingredient.name + ' ' + quantity}
        </label>
      </div>
  );
}

export default ToggleIngredient;
