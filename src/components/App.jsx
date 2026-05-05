import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId, delta) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="navbar-brand" onClick={() => goToPage('home')}>
          Paradise Nursery
        </Link>
        <ul className="navbar-links">
          <li>
            <Link to="/" onClick={() => goToPage('home')}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/plants" onClick={() => goToPage('plants')}>
              Plants
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => goToPage('about')}>
              About Us
            </Link>
          </li>
        </ul>
        <div className="navbar-cart">
          <span className="cart-icon"></span>
          <Link to="/cart" onClick={() => goToPage('cart')}>
            Cart
          </Link>
          <span className="cart-count">{getTotalItems()}</span>
        </div>
      </nav>

      {/* Main Content */}
      {currentPage === 'home' && (
        <div className="landing-page">
          <div className="hero">
            <h1>Welcome to Paradise Nursery</h1>
            <p>Your one-stop destination for beautiful and healthy houseplants!</p>
            <button
              className="get-started-btn"
              onClick={() => goToPage('plants')}
            >
              Get Started
            </button>
          </div>
        </div>
      )}

      {currentPage === 'plants' && (
        <ProductList addToCart={addToCart} />
      )}

      {currentPage === 'about' && (
        <AboutUs />
      )}

      {currentPage === 'cart' && (
        <CartItem
          cart={cart}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          getTotalPrice={getTotalPrice}
        />
      )}
    </div>
  );
}

export default App;
