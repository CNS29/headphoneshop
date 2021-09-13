import './App.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Header from "./compnents/Header/Header";
import Footer from "./compnents/Footer/Footer";
import ProductsPage from './pages/ProductsPage';
import CartContainer from "./containers/CartContainer";

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
    <div className="App">
      <Header openCart={openCart} quantityInCart={quantityInCart.length}/>
      {showCart(cart)}
      <div className="container">
        <ProductsPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
