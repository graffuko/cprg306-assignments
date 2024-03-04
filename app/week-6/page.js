'use client';
import React from 'react';
import { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

const Page = () => {
  // Initialize state variable items with data from items.json
  const [items, setItems] = useState(itemsData);

  // Event handler function to add a new item to items
  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-green-400 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      {/* Render NewItem component and pass handleAddItem as prop */}
      <NewItem onAddItem={handleAddItem} />
      {/* Render ItemList component and pass items as prop */}
      <ItemList items={items} />
    </main>
  );
};

export default Page;