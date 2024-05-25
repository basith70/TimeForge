import React from 'react';
import './Productlist.css';

const products = [
  {
    id: 1,
    title: 'Rolex Submariner',
    description: 'A classic diving watch with a robust design.',
    price: '$7,500',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 2,
    title: 'Omega Seamaster',
    description: 'A watch that combines style and functionality.',
    price: '$4,200',
    image: 'https://via.placeholder.com/150'
  },
  {
    id: 3,
    title: 'Tag Heuer Carrera',
    description: 'A sporty watch with a sophisticated look.',
    price: '$3,000',
    image: 'https://via.placeholder.com/150'
  }
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.title} className="product-image" />
          <div className="product-info">
            <h3 className="product-title">{product.title}</h3>
            <p className="product-description">{product.description}</p>
            <p className="product-price"><strong>{product.price}</strong></p>
            <button className="buy-button">Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;

