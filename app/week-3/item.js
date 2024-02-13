import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="bg-gray-200 p-4 rounded-md">
      <span className="text-lg font-bold">Name: {name}</span>
      <span className="text-base">Quantity: {quantity}</span>
      <span className="text-base">Category: {category}</span>
    </li>
  );
};

export default Item;




