import React, { useState } from 'react';
import Container from '../components/Container';

function Contact() {

    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();

    console.log('Name:', name)
    console.log('First Name:', firstname)
    console.log('Email:', email)
    console.log('Message:', message)

};

return (
    <div>
    <div>
        <Container>
        <h2>
            Vous avez besoin d’aide avant ou après votre visite du parc, concernant les attractions ou encore vos réservations ? N’hésitez pas à nous contacter à l’aide de notre 
                {' '} <span className="text-primaryColor">formulaire de contact </span> {' '}
            que vous trouverez ci-dessous. {' '} Merci et à très bientôt chez Zombieland !
        </h2>
        </Container> 

    </div>
    
        <form onSubmit={handleLogin} className="bg-backgroundColor max-w-[35rem] mx-auto rounded-lg shadow-lg mt-20 mb-20">
            <div className="mb-6">
                <h2 className='w-full p-5 flex justify-center items-center bg-[#323232] rounded'>
                    Formulaire de contact
                </h2>
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
                    required
                    className="w-full p-3 bg-[#323232] rounded"
                    />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Prénom
                </label>
                <input
                    id="firstname"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    className="w-full p-3 bg-[#323232] rounded" 
                    />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Courriel
                </label>
                <input
                    id="Email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 bg-[#323232] rounded"
                    />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                    Vous pouvez ecrire ici
                </label>
                <input
                    id="message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-10 bg-[#323232] rounded" 
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

);

}

export default Contact;