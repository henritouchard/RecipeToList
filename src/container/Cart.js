import React, {Component} from 'react';
import {connect} from 'react-redux'
import '../styles/App.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: null
    }
  }

  componentWillMount() {
    const {cart} = this.props;
    if (cart) {
      const list = [];
      for (let ix in cart) {
        let ingredients = cart[ix].ingredients;
        // Loop through stored cart to generate sorted Shop list
        for (const ingX in ingredients) {
          let department = ingredients[ingX].department;
          let name = ingredients[ingX].name;
          // If ingredient in department we have to take sum of quantity
          if (list[department] && list[department][name]) {
            list[department] = {
              ...list[department],
              [name]: {
                'quantity': parseFloat(ingredients[ingX].quantity) + parseFloat(list[department][name].quantity),
                'unit': ingredients[ingX].unit
              }
            };
          }

          else
            list[department] = {
              ...list[department],
              [name]: {
                'quantity': parseFloat(ingredients[ingX].quantity),
                'unit': ingredients[ingX].unit
              }
            };
        }
      }
      this.setState({ list })
    }
  }

  render() {
    const {list} = this.state;
    console.log(list);
    return (
        <div className="container well" align="center">
        <h1 className="titles">Shopping List</h1>
          {list && Object.keys(list).map((key, index) => {
            const ingredients = list[key];
            return (
                <div align="left" key={index}>
                  <h3>
                    {key}
                  </h3>
                  <ul>
                    {Object.keys(ingredients).map((ingredient, idx) => (
                          <li style={{listStyleType: "circle"}} key={idx}>
                            {ingredient} {ingredients[ingredient].quantity !== 0 && ": " + ingredients[ingredient].quantity} { ingredients[ingredient].unit}
                          </li>
                      ))
                    }
                  </ul>
                </div>
            )})
          }
          {!list && <h3 style={{paddingTop: "40px"}}>Hey ! Seems you've everything you need ! Let's cook! </h3>}
        </div>
    );
  }
}

export default connect(state => ({cart: state.recipeReducer.cart}))(Cart);
