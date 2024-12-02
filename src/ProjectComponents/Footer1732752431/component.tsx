import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-8 w-full h-full"> {/* Full width and height */}
      <div className="container mx-auto h-full">
        <div className="flex flex-wrap justify-between h-full">
          
          {/* FOOTER COPY */}
          <div className="w-full mb-6">
            <h3 className="text-xl font-bold mb-2">Purrfect Paws</h3>
            <p className="text-gray-400">© 2023 Purrfect Paws. All rights reserved. Bringing warmth to little paws everywhere.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer as component };