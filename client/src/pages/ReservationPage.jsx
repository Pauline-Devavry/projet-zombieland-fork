  import React, { useState } from 'react';

      const ReservationPage = () => {
        const [formData, setFormData] = useState({
          nom: '',
          prenom: '',
          email: ''
        });

        const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData({
            ...formData,
            [name]: value
          });
        };

        const handleSubmit = (e) => {
          e.preventDefault();
          console.log('Form Data:', formData);

        };

        return (
          
          <div className="flex items-center justify-center h-screen">
            
            <form 
              onSubmit={handleSubmit} 
              className="shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
            >
              
              <h2 className="text-2xl font-bold mb-6 text-center">Formulaire</h2>
              
              <div className="mb-4">
                <label 
                  className="block text-gray-700 text-sm font-bold mb-2" 
                  htmlFor="nom"
                >
                  Nom
                </label>
                <input 
                  type="text" 
                  name="nom" 
                  value={formData.nom} 
                  onChange={handleChange} 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="nom" 
                  placeholder="Entrez votre nom"
                />
              </div>

              <div className="mb-4">
                <label 
                  className="block text-gray-700 text-sm font-bold mb-2" 
                  htmlFor="prenom"
                >
                  Prénom
                </label>
                <input 
                  type="text" 
                  name="prenom" 
                  value={formData.prenom} 
                  onChange={handleChange} 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="prenom" 
                  placeholder="Entrez votre prénom"
                />
              </div>

              <div className="mb-6">
                <label 
                  className="block text-gray-700 text-sm font-bold mb-2" 
                  htmlFor="email"
                >
                  Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                  id="email" 
                  placeholder="Entrez votre email"
                />
              </div>

              <div className="flex items-center justify-between">
                <button 
                  type="submit" 
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Continuer
                </button>
              </div>
            </form>
          </div>
        );
      };

      export default ReservationPage;
