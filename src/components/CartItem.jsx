import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const CartItem = ({
  cart,
  updateQuantity,
  removeFromCart,
  getTotalPrice,
}) => {
  const calculateItemTotal = (item) => {
    return (item.price * item.quantity).toFixed(2);
  };

  const handleCheckout = () => {
    alert('Checkout feature coming soon!');
  };

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <Link to="/plants" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />
                <div className="cart-item-details">
                  <h3 className="cart-item-name">{item.name}</h3>
                  <p className="cart-item-price">
                    ${item.price.toFixed(2)} per item
                  </p>
                  <p className="cart-item-total">
                    Total: ${calculateItemTotal(item)}
                  </p>
                  <div className="cart-item-actions">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="qty-display">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total-section">
            <p className="cart-total-text">
              Total Cart Amount: <strong>${getTotalPrice().toFixed(2)}</strong>
            </p>
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout - Coming Soon
            </button>
            <Link to="/plants" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartItem;
