import React, { useState } from 'react';
import './App.css';

const ProductList = ({ addToCart }) => {
  const [cartItems, setCartItems] = useState({});

  const categories = {
    succulents: {
      name: 'Succulents',
      products: [
        {
          id: 1,
          name: 'Jade Plant',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145583?w=400&q=80',
        },
        {
          id: 2,
          name: 'Aloe Vera',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 3,
          name: 'String of Pearls',
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1614594975525-e451edda6794?w=400&q=80',
        },
        {
          id: 4,
          name: 'Echeveria',
          price: 15.99,
          image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&q=80',
        },
        {
          id: 5,
          name: 'Haworthia',
          price: 13.99,
          image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&q=80',
        },
        {
          id: 6,
          name: 'Burro\'s Tail',
          price: 16.99,
          image: 'https://images.unsplash.com/photo-1572454591674-2739f30d8c40?w=400&q=80',
        },
        {
          id: 7,
          name: 'Sedum Morganianum',
          price: 17.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
      ],
    },
    tropicals: {
      name: 'Tropical Plants',
      products: [
        {
          id: 8,
          name: 'Monstera Deliciosa',
          price: 34.99,
          image: 'https://images.unsplash.com/photo-1591206369811-4eeb2f0b40d8?w=400&q=80',
        },
        {
          id: 9,
          name: 'Fiddle Leaf Fig',
          price: 49.99,
          image: 'https://images.unsplash.com/photo-1571493982983-151af44363df?w=400&q=80',
        },
        {
          id: 10,
          name: 'Bird of Paradise',
          price: 44.99,
          image: 'https://images.unsplash.com/photo-1614594975525-e451edda6794?w=400&q=80',
        },
        {
          id: 11,
          name: 'Rubber Plant',
          price: 29.99,
          image: 'https://images.unsplash.com/photo-1598880940520-9a6e0b45f559?w=400&q=80',
        },
        {
          id: 12,
          name: 'Peace Lily',
          price: 24.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 13,
          name: 'Anthurium',
          price: 27.99,
          image: 'https://images.unsplash.com/photo-1591206369811-4eeb2f0b40d8?w=400&q=80',
        },
        {
          id: 14,
          name: 'Philodendron',
          price: 22.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
      ],
    },
    indoor foliage: {
      name: 'Indoor Foliage',
      products: [
        {
          id: 15,
          name: 'Snake Plant',
          price: 19.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 16,
          name: 'Spider Plant',
          price: 14.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 17,
          name: 'Pothos',
          price: 12.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 18,
          name: 'ZZ Plant',
          price: 21.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 19,
          name: 'Chinese Evergreen',
          price: 18.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 20,
          name: 'Boston Fern',
          price: 23.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
        {
          id: 21,
          name: 'Calathea',
          price: 26.99,
          image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&q=80',
        },
      ],
    },
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartItems((prev) => ({ ...prev, [product.id]: true }));
  };

  return (
    <div className="product-list-container">
      <h2 className="section-title">Browse Our Plants</h2>
      {Object.entries(categories).map(([key, category]) => (
        <div key={key} className="category-section">
          <h3 className="category-title">{category.name}</h3>
          <div className="product-list">
            {category.products.map((product) => (
              <div key={product.id} className="product-card">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h4 className="product-name">{product.name}</h4>
                  <p className="product-price">${product.price.toFixed(2)}</p>
                  <button
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                    disabled={cartItems[product.id]}
                  >
                    {cartItems[product.id]
                      ? 'Added to Cart'
                      : 'Add to Cart'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
