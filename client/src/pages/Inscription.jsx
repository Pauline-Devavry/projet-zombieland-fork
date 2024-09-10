import React, { useState } from 'react';
import axios from 'axios';

function Inscription() {
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            setError("Les mots de passe ne correspondent pas.");
            return;
        }

        try {
            const response = await axios.post('/register', {
                name,
                first_name: firstname,
                email,
                password,
                confirmation: confirmPassword,
            });
            setSuccess(response.data.message);
            setError('');
        } catch (error) {
            setError(error.response.data.error || "Erreur lors de l'inscription.");
            setSuccess('');
        }
    };

    return (
        <div className="min-h-screen max-w-[75rem] mx-auto flex flex-col justify-center items-center text-white font-rubik">
            <div className="w-full">
                <h2 className="text-lg mb-6">
                    Vous souhaitez vous inscrire dans un parc d’attraction incroyablement terrifiant, vous aimez les sensations fortes ? {' '}
                    Vous trouverez sur cette page ce que vous êtes venus chercher, notre {' '} 
                    <span className="text-primaryColor">formulaire d’inscription </span>! {' '} 
                    Bonne chance chez Zombieland... 
                </h2>

                <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto p-8 rounded-lg shadow-lg">
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-500">{success}</p>}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Nom
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nom"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="firstname">
                            Prénom
                        </label>
                        <input
                            id="firstname"
                            type="text"
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            placeholder="Prénom"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="email">
                            Courriel
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Courriel"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
                            Confirmer votre mot de passe
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirmer votre mot de passe"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 bg-primaryColor text-white font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Inscription;



// import React, { useState } from 'react';

// function Inscription() {
//     const [name, setName] = useState('');
//     const [firstname, setFirstname] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
    
    
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         console.log('Name:', name);
//         console.log('First Name:', firstname);
//         console.log('Email:', email);
//         console.log('Password:', password);
//         console.log('Confirm Password:', confirmPassword);
        
//     };

//     return (
//         <div className="min-h-screen max-w-[75rem] mx-auto flex flex-col justify-center items-center text-white font-rubik">
//             <div className="w-full">
//                 <h2 className="text-lg mb-6">
//                     Vous souhaitez vous inscrire dans un parc d’attraction incroyablement terrifiant, vous aimez les sensations fortes ? {' '}
//                     Vous trouverez sur cette page ce que vous êtes venus chercher, notre {' '} 
//                     <span className="text-primaryColor">formulaire d’inscription </span>! {' '} 
//                     Bonne chance chez Zombieland... 
//                 </h2>

//                 <form onSubmit={handleSubmit} className="max-w-[400px] mx-auto p-8 rounded-lg shadow-lg">
//                     <div className="mb-6">
//                         <label className="block text-sm font-medium mb-2" htmlFor="name">
//                             Nom
//                         </label>
//                         <input
//                             id="name"
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             placeholder="Nom"
//                             required
//                             className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
//                         />
//                     </div>
//                     <div className="mb-6">
//                         <label className="block text-sm font-medium mb-2" htmlFor="lastname">
//                             Prénom
//                         </label>
//                         <input
//                             id="firstname"
//                             type="text"
//                             value={firstname}
//                             onChange={(e) => setFirstname(e.target.value)}
//                             placeholder="Prénom"
//                             required
//                             className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
//                         />
//                     </div>

//                     <div className="mb-6">
//                         <label className="block text-sm font-medium mb-2" htmlFor="email">
//                             Courriel
//                         </label>
//                         <input
//                             id="email"
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="Courriel"
//                             required
//                             className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
//                         />
//                     </div>

//                     <div className="mb-6">
//                         <label className="block text-sm font-medium mb-2" htmlFor="password">
//                             Mot de passe
//                         </label>
//                         <input
//                             id="password"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Mot de passe"
//                             required
//                             className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
//                         />
//                     </div>

//                     <div className="mb-6">
//                         <label className="block text-sm font-medium mb-2" htmlFor="confirmPassword">
//                             Confirmer votre mot de passe
//                         </label>
//                         <input
//                             id="confirmPassword"
//                             type="password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             placeholder="Confirmer votre mot de passe"
//                             required
//                             className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
//                         />
//                     </div>

//                     <div className="mt-6">
//                         <button
//                             type="submit"
//                             className="w-full py-3 bg-primaryColor text-white font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primaryColor"
//                         >
//                             Envoyer
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Inscription;

