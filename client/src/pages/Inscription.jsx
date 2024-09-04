import React, { useState } from 'react';

function Inscription() {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    
    const handleLogin = (event) => {
        event.preventDefault();

        console.log('Name:', name)
        console.log('Last Name:', lastname)
        console.log('Email:', email)
        console.log('Password:', password)
        console.log('Confirm Password:', confirmPassword)
        
    };
    return (
        <div>
            <h2>
                Vous souhaitez vous inscrire dans un parc d’attraction incroyablement terrifiant, vous aimez les sensations fortes ? {' '}
                Vous trouverez sur cette page ce que vous êtes venus chercher, notre {' '} 
                <span>formulaire d’inscription </span>! {' '} 
                Bonne chance chez Zombieland... 
            </h2>

            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Nom"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        placeholder="Prénom"
                        required
                    />
              </div>

              <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Courriel"
                        required
                    />
              </div>

              <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Mot de passe"
                        required
                    />
              </div>

              <div className="mb-4">
                    <input
                        type="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirmer votre mot de passe"
                        required
                    />
              </div>

              <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 bg-primaryColor text-white font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primaryColor"
            >
              Envoyer
            </button>
          </div>

            </form>
        </div>
    )
}

export default Inscription;
    