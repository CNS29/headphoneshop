import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from "./compnents/Header/Header";
import Footer from "./compnents/Footer/Footer";
import CartContainer from "./containers/CartContainer";
import * as routes from './routes';
import ButtonScrollTop from './compnents/Button/ButtonScrollTop';

const showRoute = (routes) => {
  let result = null; 
  if(routes.length > 0) {
    result = routes.map((item, index) => {
      return <Route key={index} path={item.path} exact={item.exact} component={item.main} />
    })
    return result;
  }
  return result;
}

// Scroll To Top
const srollToTop = (click) => {
  if(click) {
    document.querySelector(".App").scrollTop = 0;
  }
}

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const state = useSelector(state => state);
  const {cart} = state;

  const showCart = (check) => {
    return check ? <CartContainer closeCart={closeCart}/>: "";
  }
  
  const openCart = (check) => {
    setCartVisible(check);
  }

  const closeCart = (check) => {
    setCartVisible(check);
  }

  return (
    <Router basename="/headphone">
      <div className="App">
        <Header openCart={openCart} quantityInCart={cart.length}/>
        {showCart(cartVisible)}
        <div className="main">
          <div className="container">
            <Switch>
              {showRoute(routes.routes)}
            </Switch>
          </div>
        </div>
        <Footer />
        <ButtonScrollTop srollToTop={srollToTop}/>
      </div>
    </Router>
  );
}

export default App;
