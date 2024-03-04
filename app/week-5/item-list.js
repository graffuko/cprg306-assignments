'use client';
import React from 'react';
import Item from './item';
import { useState } from 'react';
import items from './items.json';


const ItemList = (name, quantity, category) => {
  const [sortby, setSortBy] = useState("name");
  
  const handleSortName = () => {
    setSortBy("name");
    items.sort((a, b) => a.name.localeCompare(b.name));
  }
  
  const handleSortCategory = () => {
    setSortBy("category");
    items.sort((a, b) => a.category.localeCompare(b.category));
  }

  return (
    <div>
      <div className="flex">
        <button
          className={`mr-2 p-2 ${sortby === 'name' ? 'bg-green-200 text-black' : 'bg-green-600'}`}
          onClick={handleSortName}
        >
          Sort by Name
        </button>
        <button
          className={`p-2 ${sortby === 'category' ? 'bg-green-200 text-black' : 'bg-green-600'}`}
          onClick={handleSortCategory}
        >
          Sort by Category
        </button>
      </div>
      {items.map((item, index) => (
        <Item key={index} name={item.name} quantity={item.quantity} category={item.category}/>
      ))}
    </div>
  );
};

export default ItemList;

