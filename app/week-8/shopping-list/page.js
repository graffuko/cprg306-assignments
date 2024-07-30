"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import { getItems, addItem } from '@/app/week-10/_services/shopping-list-service';
import { useAuth } from '@/app/week-10/_utils/auth-context';

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState('');
  const { user } = useAuth();

  const loadItems = async () => {
    if (user) {
      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    }
  };

  useEffect(() => {
    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    if (user) {
      const newItemId = await addItem(user.uid, item);
      const newItem = { id: newItemId, ...item };
      setItems([...items, newItem]);
    }
  };

  const handleItemSelect = (item) => {
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