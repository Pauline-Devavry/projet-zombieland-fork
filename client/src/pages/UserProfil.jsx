import React, { useState } from "react";
import Container from "../components/Container";

function UserProfil() {
  const [name, setName] = useState('');
  const [firstname, setFirstname] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false); 

  const handleLogin = (event) => {
    event.preventDefault();

    try {
      const response = await axios.get("http://localhost:3000/", {
          name,
          first_name: firstname,
          email,
          content: message,
      }, {
          headers: {"Content-Type": "application/json"}
      }
      )

    console.log('Name:', name);
    console.log('First Name:', firstname);
    console.log('Email:', email);
    console.log('Old Password:', oldPassword);
    console.log('New Password:', newPassword);
  };

    return (
        
          <Container>
            <div className="max-w-2xl mx-auto mt-8 mb-8 p-6 bg-backgroundColor rounded shadow-lg">
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <h2 className='text-2xl font-bold mb-6'>Mon profil</h2>
                <h3>Gérer vos paramètres personnels</h3>
              </div>
    
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Nom</label>
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                
                  required
                  className="w-full p-3 bg-white rounded text-black"
                />
              </div>
    
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="firstname">Prénom</label>
                <input
                  id="firstname"
                  type="text"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  required
                  className="w-full p-3 bg-white rounded text-black"
                />
              </div>
    
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Courriel</label>
                <input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 bg-white rounded text-black"
                />
              </div>
    
              
              {isEditing && (
                <>
                  <div className="mb-6">
                    <h3>Changer votre mot de passe</h3>
                  </div>
    
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="oldPassword">Ancien mot de passe</label>
                    <input
                      id="oldPassword"
                      type="password"
                      value={oldPassword}
                      onChange={(e) => setOldPassword(e.target.value)}
                      required
                      className="w-full p-3 bg-white rounded text-black"
                    />
                  </div>
    
                  <div className="mb-6">
                    <label className="block text-sm font-medium mb-2" htmlFor="newPassword">Nouveau mot de passe</label>
                    <input
                      id="newPassword"
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      className="w-full p-3 bg-white rounded text-black"
                    />
                  </div>
                </>
              )}
    
              <div className="flex justify-between">
                {isEditing ? (
                  <>
                    <button
                      type="submit"
                      className="bg-primaryColor text-white px-4 py-2 rounded"
                    >
                      Enregistrer
                    </button>
                    <button
                      type="button"
                      className="bg-primaryColor text-white px-4 py-2 rounded"
                      onClick={() => setIsEditing(false)}
                    >
                      Annuler
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="bg-primaryColor text-white px-4 py-2 rounded"
                    onClick={() => setIsEditing(true)}
                  >
                    Modifier les informations
                  </button>
                )}
              </div>
            </form>
            </div>
          </Container>
        
      );
    }
    
    export default UserProfil;