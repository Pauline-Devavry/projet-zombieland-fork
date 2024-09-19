import { useState, useEffect, useContext } from "react";
import Container from "../components/Container";
import { api } from "../api/axiosConfig";
import { AuthContext } from "../context/AuthContext";

function UserProfil() {
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // États pour stocker les valeurs d'origine
  const [originalName, setOriginalName] = useState("");
  const [originalFirstname, setOriginalFirstname] = useState("");
  const [originalEmail, setOriginalEmail] = useState("");

  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setFirstname(user.first_name || "");
      setEmail(user.email || "");

      // Enregistrer les valeurs originales au moment où les données utilisateur sont chargées
      setOriginalName(user.name || "");
      setOriginalFirstname(user.first_name || "");
      setOriginalEmail(user.email || "");
    }
  }, [user]);

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (oldPassword && oldPassword === newPassword) {
      setError("Les mots de passe sont identiques !");
      return;
    }

    try {
      let updatedData = {
        name,
        first_name: firstname,
        email,
      };

      // Ajouter les mots de passe uniquement si l'utilisateur souhaite les changer
      if (oldPassword && newPassword) {
        updatedData = {
          ...updatedData,
          oldPassword,
          newPassword,
        };
      }

      // Envoyer la requête PATCH à l'API
      await api.patch(`/users/${user.id}`, updatedData, {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess("Informations mises à jour avec succès !");
      setError("");
      setIsEditing(false);

      setOldPassword("");
      setNewPassword("");

      // Mettre à jour les valeurs originales après modification
      setOriginalName(name);
      setOriginalFirstname(firstname);
      setOriginalEmail(email);
    } catch (error) {
      // Gestion des erreurs depuis le serveur
      if (error.response) {
        if (error.response.status === 401) {
          setError("Ancien mot de passe incorrect.");
        } else if (
          error.response.status === 400 &&
          error.response.data.error === "Cet email est déjà utilisé."
        ) {
          setError("Cet email est déjà utilisé. Impossible de l'ajouter.");
        } else {
          setError(
            error.response.data.message ||
              "Erreur lors de la mise à jour des informations."
          );
        }
      } else {
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
      setSuccess("");
    }
  };

  // Fonction pour annuler les modifications et revenir aux valeurs d'origine
  const handleCancel = () => {
    setName(originalName);
    setFirstname(originalFirstname);
    setEmail(originalEmail);
    setOldPassword("");
    setNewPassword("");
    setIsEditing(false);
    setError(""); // Réinitialiser les messages d'erreur
    setSuccess(""); // Réinitialiser les messages de succès
  };

  return (
    <Container>
      <div className="max-w-2xl mx-auto mt-8 mb-8 p-6 bg-secondaryBackgroundColor rounded shadow-lg">
        <form onSubmit={handleUpdate}>
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-6">Mon profil</h2>
            <h3>Gérer vos paramètres personnels</h3>
          </div>

          <div className="mb-6">
            <label
              className="block text-sm font-medium mb-2"
              htmlFor="first_name"
            >
              Prénom
            </label>
            <input
              id="first_name"
              type="text"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              className="w-full p-3 bg-white rounded text-black"
              readOnly={!isEditing}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Nom
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-white rounded text-black"
              readOnly={!isEditing}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Courriel
            </label>
            <input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="oldPassword"
                >
                  Ancien mot de passe
                </label>
                <input
                  id="oldPassword"
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full p-3 bg-white rounded text-black"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="newPassword"
                >
                  Nouveau mot de passe
                </label>
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
                  type="button"
                  className="bg-primaryColor text-white px-4 py-2 rounded"
                  onClick={handleCancel}
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-primaryColor text-white px-4 py-2 rounded ml-auto"
                >
                  Enregistrer
                </button>
              </>
            ) : (
              <button
                type="button"
                className="bg-primaryColor text-white px-4 py-2 rounded"
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditing(true);
                }}
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
