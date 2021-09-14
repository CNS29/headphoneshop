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
  const [cart, setCart] = useState(false);
  const quantityInCart = useSelector(state => state.cart);


  const showCart = (check) => {
    return check ? <CartContainer closeCart={closeCart}/>: "";
  }
  
  const openCart = (check) => {
    setCart(check);
  }

  const closeCart = (check) => {
    setCart(check);
  }

  return (
    <Router basename="/headphone">
      <div className="App">
        <Header openCart={openCart} quantityInCart={quantityInCart.length}/>
        {showCart(cart)}
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
