import React, { useEffect, useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [savedCartItems, setSavedCartItems] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem('savedCart');
    if (savedCart) {
      setSavedCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('savedCart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleRemoveClick = (productId) => {
    removeFromCart(productId);
  };

  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="cart">
        <h2 className="cart-title">Shopping Cart</h2>
        <p className="cart-empty-message">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            {item}
            <button className="remove-button" onClick={() => handleRemoveClick(item)}>Remove From Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
