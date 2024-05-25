import React, { useState } from 'react';
import './AdminCategory.css';

function AdminCategory() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim()) {
      setCategories([...categories, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const handleRemoveCategory = (index) => {
    setCategories(categories.filter((_, i) => i !== index));
  };

  return (
    <div className="admin-category-container">
      <h2>Admin Category Management</h2>
      <div className="add-category">
        <input
          type="text"
          placeholder="New category name"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>Add Category</button>
      </div>
      <div className="category-list">
        {categories.map((category, index) => (
          <div key={index} className="category-item">
            <span>{category}</span>
            <button onClick={() => handleRemoveCategory(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminCategory;

