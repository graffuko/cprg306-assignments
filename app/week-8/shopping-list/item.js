"use client";

export default function Item({ item, onSelect }) {
  let { name, quantity, category } = item;

  const handleClick = () => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <li className="bg-gray-200 p-4 rounded-md" onClick={handleClick}>
      <h3 className="text-xl font-bold">{name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Category: {category}</p>
    </li>
  );
}
