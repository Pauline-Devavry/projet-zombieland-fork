import { useState, useEffect, useContext } from "react";
import Container from "../components/Container";
import { api } from "../api/axiosConfig";
import { AuthContext } from "../context/AuthContext";


//obliger de mettre un commentaire pour enregitsrer, car j'avais fais un commit mais on a été obligé de le supprimer à cause du merge qui a tout suppr, je vais l'enlever après


function UserProfil() {
  // const [name, setName] = useState('');
  // const [firstname, setFirstname] = useState('');
  // const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false); 
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { user } = useContext(AuthContext)


    // const handleUpdate = async (event) => {
    //   event.preventDefault();

    //   if (oldPassword === newPassword) {
    //     setError("Les mots de passe sont identiques !");
    //     return;
    //   }

    //   try {
    //     const updatedData = {
    //       name,
    //       first_name: firstname,
    //       email,
    //       oldPassword,
    //       newPassword,
    //     };

    //     const response = await api.patch(`/users/${userId}`, updatedData, {
    //       headers: { "Content-Type": "application/json" },
    //     });

    //         setSuccess("Informations mises à jour avec succès !");
    //         setError('');
    //         setIsEditing(false); 
    //       } catch (error) {
    //         setError("Erreur lors de la mise à jour des informations.");
    //         setSuccess('');
    //       }
    // };

      return (
        
          <Container>
            <div className="max-w-2xl mx-auto mt-8 mb-8 p-6 bg-secondaryBackgroundColor rounded shadow-lg">
            <form>
              <div className="mb-6">
                <h2 className='text-2xl font-bold mb-6'>Mon profil</h2>
                <h3>Gérer vos paramètres personnels</h3>
              </div>
    
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="name">Nom</label>
                  <input
                    id="name"
                    type="text"
                    value={user?.first_name}
                    className="w-full p-3 bg-white rounded text-black"
                    readOnly={!isEditing}
                  />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="firstname">Prénom</label>
                  <input
                    id="firstname"
                    type="text"
                    value={user?.first_name}
                    className="w-full p-3 bg-white rounded text-black"
                    readOnly={!isEditing}
                  />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="email">Courriel</label>
                  <input
                    id="email"
                    type="text"
                    value={user?.email}
                    className="w-full p-3 bg-white rounded text-black"
                    readOnly={!isEditing}
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

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}
            </form>
            </div>
          </Container>
        
      );
    }
    
    export default UserProfil;