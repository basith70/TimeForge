import React from 'react';
import './Catogery.css'; 

function Catogery() {
  const products = [
    { title: 'Product 1', oldPrice: '$79.99', price: '$49.99', imgSrc: '/images/product1.jpg' },
    { title: 'Product 2', oldPrice: '$89.99', price: '$59.99', imgSrc: '/images/product2.jpg' },
    { title: 'Product 3', oldPrice: '$99.99', price: '$69.99', imgSrc: '/images/product3.jpg' }
  ];

  const categories = [
    { name: 'Category 1', products: products },
    // { name: 'Category 2', products: products }
  ];

  return (
    <div className="category-page">
      {categories.map((category, index) => (
        <section className="section-products" key={index}>
          <div className="container">
            <div className="row justify-content-center text-center">
              <div className="col-md-8 col-lg-6">
                <div className="header">
                  <h3>{category.name}</h3>
                  <h2>Popular Products</h2> 
                </div>
              </div>
            </div>
            <div className="row">
              {category.products.map((product, idx) => (
                <div className="col-md-6 col-lg-4 col-xl-3" key={idx}>
                  <div className="single-product">
                    <div className="part-1" style={{ backgroundImage: `url(${product.imgSrc})` }}>
                      <ul>
                        <li><a href="#"><i className="fas fa-shopping-cart"></i></a></li>
                        <li><a href="#"><i className="fas fa-heart"></i></a></li>
                        <li><a href="#"><i className="fas fa-plus"></i></a></li>
                        <li><a href="#"><i className="fas fa-expand"></i></a></li>
                      </ul>
                    </div>
                    <div className="part-2">
                      <h3 className="product-title">{product.title}</h3>
                      <h4 className="product-old-price">{product.oldPrice}</h4>
                      <h4 className="product-price">{product.price}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Catogery;
