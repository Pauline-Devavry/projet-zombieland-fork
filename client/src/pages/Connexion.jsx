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
    <div> 
        <h2>Pas de compte chez Zombieland ? Inscrivez-vous !</h2>
        <form onSubmit={handleLogin}>
    <div>
            <label>Courriel</label>
    
            <input type="email" 
            value={email}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Courriel"
            required
    />
        
    </div>
    <div>
            <label>Mot de passe</label>
            <input
       type="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       placeholder="Mot de passe"
       required
     />
   </div>
        <button type="submit">
          Connexion
        </button>
      </form>
      <a href="#" >
        Mot de passe oublié ?
      </a>
    </div>
   );
}



export default Connexion