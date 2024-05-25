import React, { useState } from 'react';
import './Cart.css';

const initialCartItems = [
  {
    id: 1,
    title: 'Rolex Submariner',
    description: 'A classic diving watch with a robust design.',
    price: 7500,
    quantity: 1,
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaefa29eb/images/Titan/Catalog/1639SM01_1.jpg?sw=360&sh=360'
  },
  {
    id: 2,
    title: 'Omega Seamaster',
    description: 'A watch that combines style and functionality.',
    price: 4200,
    quantity: 1,
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw232da7c3/images/Titan/Catalog/1627KM01_1.jpg?sw=360&sh=360'
  },
  {
    id: 3,
    title: 'Tag Heuer Carrera',
    description: 'A sporty watch with a sophisticated look.',
    price: 3000,
    quantity: 1,
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0b497d8a/images/Titan/Catalog/90197AP01_1.jpg?sw=360&sh=360'
  }
];

function Cart() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleQuantityChange = (id, change) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + change } : item
    ));
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.title} className="cart-item-image" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.title}</h3>
              <p className="cart-item-description">{item.description}</p>
              <div className="cart-item-controls">
                <button 
                  className="cart-item-decrease" 
                  onClick={() => handleQuantityChange(item.id, -1)} 
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span className="cart-item-quantity">{item.quantity}</span>
                <button 
                  className="cart-item-increase" 
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </div>
              <p className="cart-item-price">${item.price * item.quantity}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Order Summary</h2>
        <p>Total: ${calculateTotal()}</p>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );  
}

export default Cart;
