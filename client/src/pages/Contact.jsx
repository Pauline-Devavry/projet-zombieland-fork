import {useState} from 'react';
import Container from '../components/Container';
import { api } from '../api/axiosConfig';

function Contact() {

    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post("/messages", {
                name,
                first_name: firstname,
                email,
                content: message,
            }, {
                headers: {"Content-Type": "application/json"}
            }
            )

            if (response.status === 201) {
                setSuccessMessage("Votre message a bien été envoyé");
                // setErrorMessage('');
                    setName('');
                    setFirstname('');
                    setEmail('');
                    setMessage('');
            } else {
                setErrorMessage("Une erreur est survenue.");
                setSuccessMessage('');
            }
        } catch (error) {
            setErrorMessage("Erreur lors de l'envoi du message");
            setSuccessMessage('');
        }
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
    
        <form onSubmit={handleSubmit} className="bg-backgroundColor max-w-[35rem] mx-auto rounded-lg shadow-lg mt-20 mb-20">
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
                <label className="block text-sm font-medium mb-2" htmlFor="prenom">
                    Prénom
                </label>
                <input
                    id="prenom"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                    className="w-full p-3 bg-[#323232] rounded" 
                    />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="courriel">
                    Courriel
                </label>
                <input
                    id="courriel"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 bg-[#323232] rounded"
                    />
            </div>

            <div className="mb-6">
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                    Vous pouvez ecrire ici
                </label>
                <textarea
                    id="message"
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-10 bg-[#323232] rounded" 
                    rows="5"
                    />
            </div>

            {successMessage && (
                    <p className="text-white text-center mb-4">
                        {successMessage}
                    </p>
                )}
                {errorMessage && (
                    <p className="text-white text-center mb-4">
                        {errorMessage}
                    </p>
                )}

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