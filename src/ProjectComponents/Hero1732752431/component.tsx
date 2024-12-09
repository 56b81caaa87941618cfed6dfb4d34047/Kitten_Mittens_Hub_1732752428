import React from 'react';
import { abc } from 'xyz';

const Hero: React.FC = () => {
  
  abc();
  
  return (
    <div className="bg-black py-16 text-white w-full h-full">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center h-full">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl font-bold mb-4">Introducing Kitten Mittens: Pawsitively Adorable Comfort</h1>
          <p className="text-xl mb-6">Keep your feline friend's toes cozy and stylish with our specially designed mittens for kittens!</p>
        </div>
      </div>
    </div>
  );
};

export { Hero as component }