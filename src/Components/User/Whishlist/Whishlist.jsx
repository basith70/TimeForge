import React, { useState } from 'react';
import './Whishlist.css'; 

const wishlistItems = [
  {
    id: 1,
    name: 'Beanie with Logo',
    price: '$20.00 $18.00',
    stockStatus: 'In Stock',
    addedOn: 'December 3, 2013',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwaefa29eb/images/Titan/Catalog/1639SM01_1.jpg?sw=360&sh=360'
  },
  {
    id: 2,
    name: 'Classy shirt',
    price: '$16.00',
    stockStatus: 'In Stock',
    addedOn: 'December 2000',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw232da7c3/images/Titan/Catalog/1627KM01_1.jpg?sw=360&sh=360'
  },
  {
    id: 3,
    name: 'Beanie',
    price: '$20.00 $18.00',
    stockStatus: 'In Stock',
    addedOn: 'December 2018',
    image: 'https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw0b497d8a/images/Titan/Catalog/90197AP01_1.jpg?sw=360&sh=360'
  },
];

function Whishlist() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const removeItemFromWishlist = (id) => {
    // Logic to remove item from wishlist goes here
    console.log(`Item ${id} removed from wishlist`);
  };

  const filteredItems = wishlistItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="wishlist-container">
      <h2>My Wishlist</h2>
      <div className="wishlist-search">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="wishlist-items">
        {filteredItems.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <img src={item.image} alt={item.name} className="item-image" />
            <div className="item-details">
              <p className="item-name">{item.name}</p>
              <p className="item-price">{item.price}</p>
              <p className="item-stock">{item.stockStatus}</p>
              <p className="item-added-on">Added on: {item.addedOn}</p>
              <button className="remove-from-wishlist-button" onClick={() => removeItemFromWishlist(item.id)}>Remove from Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Whishlist;
