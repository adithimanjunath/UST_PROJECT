import React, { useState } from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home.js';
import About from './components/About/about.js';
import Products from './components/Products/Products.js';
import Button from './components/Button/Button.js';
import Cart from './components/Cart.js';
import Info from './components/About/info/info.js';
import BudgetEstimation from './components/About/budget/BudgetEstimation.js';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartMessage, setCartMessage] = useState('');

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setLoggedIn(!loggedIn);
      setIsLoading(false);
    }, 2000);
  };
  
  const addToCart = (productId) => {
      setCartItems([...cartItems, productId]);
      console.log(`Adding product with ID ${productId} to cart`);
      setCartMessage('Product added to cart successfully');
      setTimeout(() => {
        setCartMessage('');
      }, 2000);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter(item => item !== productId);
    setCartItems(updatedCart);
    setCartMessage('Product removed from cart successfully');
    setTimeout(() => {
      setCartMessage('');
    }, 1000);
  };

  return (
    <div data-testid="App" className="App">
      <nav data-testid="main_nav">
        <h1 data-testid="brandName">Home Decor</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
        {loggedIn && (
          <NavLink to="/cart">View Cart</NavLink>
        )}
        <Button
          value={loggedIn}
          handleLogin={handleLogin}
          isLoading={isLoading}
          displayTrue="Logout"
          displayFalse="Login"
        /> 
      </nav>
      {cartMessage && <div className="cart-message">{cartMessage}</div>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />}>
          <Route path="info" element={<Info />} />
          <Route path="budget" element={<BudgetEstimation />} />
        </Route>
        <Route path="/products" element={<Products isUserLoggedIn={loggedIn} addToCart={addToCart} removeFromCart={removeFromCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart}  />} />
        <Route path="*" element={<h4 className="error">Route Not Found</h4>} />
      </Routes>
    </div>
  );
};

export default App;
