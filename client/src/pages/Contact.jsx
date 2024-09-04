import React, { useState } from 'react';

function Contact() {

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

    console.log('Name:', name)
    console.log('Last Name:', lastname)
    console.log('Email:', email)
    console.log('Message:', message)

};

return (
    <div>
        <h2>
            Vous avez besoin d’aide pour avant ou après votre visite concernant le parc, les attractions ou encore vos réservations ? N’hésitez pas à nous contacter à l’aide de notre formulaire de contact que vous trouverez ci-dessous.Merci et à très bientôt chez Zombieland !
        </h2>

    </div>
    
        <form onSubmit={handleLogin} className="bg-backgroundColor max-w-[400px] mx-auto p-8 rounded-lg shadow-lg">
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

        </form>

);

}

export default Contact;