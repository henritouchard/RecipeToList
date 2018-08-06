import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';


import store from './store';
import Header from './components/Header';
import RecipesToList from './components/RecipesToList';
import RecipePage from './container/RecipePage';
import Cart from './container/Cart';

import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';

const Routes = () => (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={RecipesToList}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/recipe/:recipeId' component={RecipePage}/>
      </Switch>
    </div>
);

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <Routes/>
      </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
