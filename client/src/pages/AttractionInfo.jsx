import React from 'react';

function AttractionInfo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <div className="flex items-start bg-gray-800">
      <div className="flex flex-col items-center">
      <img src='./Image.jpg' alt="Attraction Zombie " className="image-parc-zombie" />

      </div>
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between">
            <p className="text-sm text-gray-400">
            In non est purus. Quisque et velit est. 
            Morbi sed velit eros. Nam at lacus velit. 
            Nam at lacus velit.</p>
            <p className="bg-gray-700 p-4 rounded-lg shadow-md flex justify-between">
            Quisque et velit est. Nam at lacus velit.
             In non est purus. Morbi sed velit eros. 
             Nam at lacus velit. Quisque et velit est.
            </p>
          </div><div className="info-box">
        <p>Roller coaster</p>
      </div>
          <div className="flex items-center space-x-2 mt-4">
            <div className="bg-black p-4 rounded-full">
            </div>
            <span className="text-sm">Hauteur minimale : 1m31</span>
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-lg font-semibold">
        Pour votre sécurité, soyez en bonne santé
      </p>
    </div>
    
  );
}

export default AttractionInfo;    import React from 'react';