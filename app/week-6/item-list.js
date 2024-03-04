'use client';
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => { // Add items prop
  const [sortBy, setSortBy] = useState("name");
  const [sortedItems, setSortedItems] = useState(items); // Define sortedItems state

  const handleSortName = () => {
    const sortedByName = [...items].sort((a, b) => a.name.localeCompare(b.name));
    setSortedItems(sortedByName); // Update sortedItems state
    setSortBy("name"); // Update sortBy state
  };

  const handleSortCategory = () => {
    const sortedByCategory = [...items].sort((a, b) => a.category.localeCompare(b.category));
    setSortedItems(sortedByCategory); // Update sortedItems state
    setSortBy("category"); // Update sortBy state
  };

  return (
    <div>
      <div className="flex">
        <button
          className={`mr-2 p-2 ${sortBy === 'name' ? 'bg-green-200 text-black' : 'bg-green-600'}`}
          onClick={handleSortName}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 ${sortBy === 'category' ? 'bg-green-200 text-black' : 'bg-green-600'}`}
          onClick={handleSortCategory}
        >
          Sort by Category
        </button>
      </div>
      {/* Render sortedItems instead of items */}
      {sortedItems.map((item, index) => (
        <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  );
};

export default ItemList;



