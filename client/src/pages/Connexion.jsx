import React, { useContext, useState } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { api } from '../api/axiosConfig';
import { AuthContext } from '../context/AuthContext';

function Connexion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()

  const handleLogin = async (event) => {
    event.preventDefault();
	try {
		const response = await api.post("/auth/login", {
			email,
			password
		})
		if(response.status === 200) {
			const userData = await api.get("/auth/me")
			setUser(userData.data)
      const { from } = location.state || { from: { pathname: '/' } };
      navigate(from.pathname, { replace: true });
		}
	} catch (error) {
		console.log(error)
	}
  };


return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-backgroundColor">
      <div className="bg-transparent p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-white text-lg mb-4">
          Pas de compte chez Zombieland ?{' '}
          <NavLink to={"/inscription"} className="text-primaryColor">Inscrivez-vous !</NavLink>
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