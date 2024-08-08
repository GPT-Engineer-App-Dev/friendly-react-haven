import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const Index = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);

  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Super Simple React App</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Counter</h2>
        <div className="flex justify-center items-center mb-6">
          <Button onClick={decrementCount} variant="outline" className="mr-4">-</Button>
          <span className="text-2xl font-bold">{count}</span>
          <Button onClick={incrementCount} variant="outline" className="ml-4">+</Button>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Item List</h2>
        <div className="flex mb-4">
          <Input
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder="Enter a new item"
            className="mr-2"
          />
          <Button onClick={addItem}>Add</Button>
        </div>
        <ul className="list-disc pl-5">
          {items.map((item, index) => (
            <li key={index} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
