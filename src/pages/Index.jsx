import React, { useState } from 'react';
import Confetti from 'react-confetti';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  const triggerConfetti = () => {
    setIsConfettiActive(true);
    setTimeout(() => setIsConfettiActive(false), 5000); // Stop confetti after 5 seconds
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {isConfettiActive && <Confetti />}
      <h1 className="text-4xl font-bold mb-8">Welcome to Our App</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <p className="text-xl mb-4">This is a clean and simple React application.</p>
        <Button onClick={triggerConfetti}>Celebrate!</Button>
      </div>
    </div>
  );
};

export default Index;
