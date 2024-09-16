import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../api/axiosConfig';

function Reservation() {
    const [name, setName] = useState('');
    const [firstname, setFirstname] = useState('');
    const [email, setEmail] = useState('');
    const [ticketType, setTicketType] = useState('');
    const [totalPrice, setTotalPrice] = useState(0);
    const [numberOfTickets, setNumberOfTickets] = useState('1');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [desiredDate, setDesiredDate] = useState('');

    const ticketPrices = {
        standard: 45,
    };

    useEffect(() => {
        const pricePerTicket = ticketPrices[ticketType] || 0;
        setTotalPrice(pricePerTicket * numberOfTickets);
    }, [ticketType, numberOfTickets]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('/reservations', {
                name,
                first_name: firstname,
                email,
                typeTicket: ticketType,
                totalPrice: totalPrice,
            }, {
                headers: { "Content-Type": "application/json" }
            });

            setSuccess(response.data.message);
            setError('');
        } catch (error) {
            setError(error.response.data.error || "Erreur lors de la réservation.");
            setSuccess('');
        }
    };

    return (
        <div className="min-h-screen max-w-[75rem] mx-auto flex flex-col justify-center items-center text-white font-rubik">
            <div className="w-full mb-20">
                <h2 className="text-lg mb-6">
                    Vous souhaitez réserver vos places pour notre parc d’attractions ? {' '}
                    Vous trouverez sur cette page notre <span className="text-primaryColor">formulaire de réservation</span>! {' '}
                    Nous avons hâte de vous accueillir !
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
                            Adresse mail
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Adresse mail"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="ticketType">
                            Type de ticket
                        </label>
                        <select
                            id="ticketType"
                            value={ticketType}
                            onChange={(e) => setTicketType(e.target.value)}
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        >
                            <option value="">Sélectionnez un type de ticket</option>
                            <option value="standard">Standard : 45€</option>
                        </select>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="desiredDate">
                            Date de visite souhaitée
                        </label>
                        <input
                            id="desiredDate"
                            type="date"
                            value={desiredDate}
                            onChange={(e) => setDesiredDate(e.target.value)}
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="numberOfTickets">
                            Nombre de tickets
                        </label>
                        <input
                            id="numberOfTickets"
                            type="number"
                            value={numberOfTickets}
                            onChange={(e) => setNumberOfTickets(Number(e.target.value))}
                            min="1"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="totalPrice">
                            Prix total
                        </label>
                        <input
                            id="totalPrice"
                            type="text"
                            value={`€${totalPrice.toFixed(2)}`}
                            readOnly
                            placeholder="Prix total"
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-3 bg-primaryColor text-white font-bold rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        >
                            Réserver
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Reservation;
