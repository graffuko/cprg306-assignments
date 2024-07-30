"use client";

import { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from './items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  const handleItemSelect = (item) => {
    // Clean up the item name
    const cleanedName = item.name
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD800-\uDFFF]|[\u2011-\u26FF]|[\u0020-\u002F])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <main>
      <h1>Shopping List</h1>
      <div style={{ display: 'flex' }}>
        <div>
          <NewItem onAddItem={handleAddItem} /> {/* Include NewItem component */}
          <ItemList items={items} onItemSelect={handleItemSelect} /> {/* Pass items state as prop */}
        </div>
        <MealIdeas ingredient={selectedItemName} />
      </div>
      <Link href="/">Back to Home</Link>
    </main>
  );
}

