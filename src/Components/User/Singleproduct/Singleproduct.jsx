import React, { useState } from 'react';
import './Singleproduct.css';

function Singleproduct() {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState(40);
  const [color, setColor] = useState('red');

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) => {
      if (increment) {
        return prevQuantity + 1;
      } else {
        return prevQuantity > 1 ? prevQuantity - 1 : 1;
      }
    });
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className="single-product-page">
      <div className="product-image">
        <img
          src="https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwef1a0f86/images/Titan/Catalog/1688KM06_1.jpg?sw=360&sh=360"
          alt="Product"
        />
        <p className="product-price">$280</p>
        <button className="add-to-cart-button">Add to Cart</button>
      </div>
      <div className="product-details">
        <h1>Camper</h1>
        <div className="product-rating">★★★★★</div>
        
        <p className="product-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi quos quidem sequii illum facere recusandae voluptatibus.
        </p>
        <div className="product-options">
          <div className="quantity">
            <button onClick={() => handleQuantityChange(false)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(true)}>+</button>
          </div>
          <div className="size">
            <label>Choose a size:</label>
            <select value={size} onChange={handleSizeChange}>
              <option value="40">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
            </select>
          </div>
          {/* <div className="color">
            <label>Choose a color:</label>
            <div className="color-options">
              <input
                type="radio"
                name="color"
                value="red"
                checked={color === 'red'}
                onChange={handleColorChange}
              /> Red
              <input
                type="radio"
                name="color"
                value="blue"
                checked={color === 'blue'}
                onChange={handleColorChange}
              /> Blue
              <input
                type="radio"
                name="color"
                value="green"
                checked={color === 'green'}
                onChange={handleColorChange}
              /> Green
            </div>
          </div> */}
        </div>
        
      </div>
    </div>
  );
}

export default Singleproduct;
