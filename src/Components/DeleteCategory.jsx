import React, { useState } from 'react';
import axios from 'axios';

export const DeleteCategory = () => {
  const [categoryId, setCategoryId] = useState('');

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await axios.delete(`http://book-e-sell-node-api.vercel.app/api/category?id=${categoryId}`);

      if (response.status === 200) {
        alert('Category deleted successfully!');
        setCategoryId('');
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <div>
      <h1>Delete Category</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Category ID:
          <input
            type="text"
            value={categoryId}
            onChange={event => setCategoryId(event.target.value)}
          />
        </label>
        <button type="submit">Delete Category</button>
      </form>
    </div>
  );
};

export default DeleteCategory;
