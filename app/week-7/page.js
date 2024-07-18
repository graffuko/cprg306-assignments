"use client";

import { useState } from 'react';
import Link from 'next/link';
import ItemList from './item-list';
import NewItem from './new-item';
import itemsData from './items.json';

export default function Page() {
    
    const [items, setItems] = useState(itemsData);

    const handleAddItem = (item) => {
        setItems([...items, item]);
    };
    
    return (
        <main>
            <h1>Shopping List</h1>
            <NewItem onAddItem={handleAddItem} /> {/* Include NewItem component */}
            <ItemList items={items} /> {/* Pass items state as prop */}
            <Link href="/">Back to Home</Link>
        </main>
    );
}
