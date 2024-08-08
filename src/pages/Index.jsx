import React from 'react';
import { Button } from "@/components/ui/button"

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <p className="text-xl mb-6">This is a clean and simple React application.</p>
        <Button>Click me!</Button>
      </div>
    </div>
  );
};

export default Index;
