'use client';
import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => { // Add items prop
  const [sortBy, setSortBy] = useState("name");

  const handleSortName = () => {
    setSortBy("name");
    // Create a copy of items array and sort it by name
    const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));
    // Update items state with sortedItems
    setItems(sortedItems);
  };

  const handleSortCategory = () => {
    setSortBy("category");
    // Create a copy of items array and sort it by category
    const sortedItems = [...items].sort((a, b) => a.category.localeCompare(b.category));
    // Update items state with sortedItems
    setItems(sortedItems);
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
      {/* Render items array instead of itemsData */}
      {items.map((item, index) => (
        <Item key={index} name={item.name} quantity={item.quantity} category={item.category} />
      ))}
    </div>
  );
};

export default ItemList;


