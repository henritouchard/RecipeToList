import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/App.css';

const Header = () => (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title col-sm-10 col-xs-9">
          <Link to="/">
            CookIn
          </Link>
        </h1>
        <button className="btn btn-info col-sm-2 col-xs-3" style={{align: "right", margin: "-5px"}}>
          <Link to="/cart">
            <div className="glyphicon glyphicon-shopping-cart "
                 style={{
                   fontSize: "1.6em",
                   marginTop: "3px",
                   color: "white"
                 }}>
              <h4 style={{margin: "-5px 0 "}}>
                My Cart
              </h4>
            </div>


          </Link>
        </button>
      </header>
    </div>
);

export default Header;
