import React, { useState } from 'react';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundColor">
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-lg mb-4">
          Pas de compte chez Zombieland ?{' '}
          <span className="text-primaryColor">Inscrivez-vous !</span>
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse email"
              required
              className="w-full p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              required
              className="w-full p-2 border rounded text-black focus:outline-none focus:ring-2 focus:ring-primaryColor"
            />
          </div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-gray-400 text-sm">
              Mot de passe oublié ?
            </a>
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-primaryColor text-white font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primaryColor"
            >
              Connexion
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connexion;