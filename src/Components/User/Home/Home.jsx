import React from 'react';
import './Home.css';

const products = [
  {
    id: 1,
    title: 'Rolex Submariner',
    description: 'A classic diving watch with a robust design.',
    price: '$7,500',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz4sdWnTXTFa4U6HmfqyYg0OWLqDcqrDlHkA&usqp=CAU'
  },
  {
    id: 2,
    title: 'Omega Seamaster',
    description: 'A watch that combines style and functionality.',
    price: '$4,200',
    image: 'https://www.omegawatches.com/media/wysiwyg/52221422004001.jpg'
  },
  {
    id: 3,
    title: 'Tag Heuer Carrera',
    description: 'A sporty watch with a sophisticated look.',
    price: '$3,000',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaWA67wjdA5oEJBsNMzCNg3MTYBQ-mzwO5Yg&usqp=CAU',
  }
];

function Home() {
  return (
    <div className="home-container">
      <div className="hero-content">
        <h1>It's Time to TimeForge.</h1>
      </div>
      <div className="product-section">
        <h2>Our Products</h2>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.title} className="product-image" />
              <div className="product-info">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price"><strong>{product.price}</strong></p>
                <button className="buy-button">Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
