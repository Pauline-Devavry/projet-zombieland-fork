import React from 'react';

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex items-start bg-gray-800">
        <img
          src={dzsqdqSDqzsd}
          alt="Zombie Attraction"
          className="w-96 h-96 object-cover rounded-lg"
        />
        <div className="space-y-4">
          <div className="bg-gray-700 p-4 rounded-lg shadow-md">
            <p className="text-sm text-gray-400">
              texte
            </p>
            <p className="text-sm text-red-500 mt-2">
            texte
            </p>

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

export default App;