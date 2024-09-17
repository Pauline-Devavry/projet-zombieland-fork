import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../api/axiosConfig';

function Reservation() {

    const [tickets, setTickets] = useState([])

    const [ticketsChoice, setTicketChoice] = useState([])

    const [formData, setFormData] = useState({
        name: "",
        firstname: "",
        email: "",
        ticketChoices: [],
        date: "",
        totalPrice: ""
    })

    const handleChangeFormData = (e) => {
        const { name, value} = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/tickets")
                setTickets(response.data)          
            } catch (error) {
                console.log({erreur: error})
            }   
        }
        fetchData()
    }, []);


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

    const handleTicketSelection = (ticket, quantity) => {
        const isChecked = ticketsChoice.find(t => t.id === ticket.id)
        if(isChecked) {
            return setTicketChoice(prev => prev.filter(t => t.id !== ticket.id))
        }
        setTicketChoice(prev => [...prev, ticket])
    }

    


    return (
        <div className="min-h-screen max-w-[75rem] mx-auto flex flex-col justify-center items-center text-white font-rubik">
            <div className="w-full mb-20">
                <h2 className="text-lg mb-6">
                    Envie de réserver vos places pour notre parc d'attractions sur le thème des zombies ?  {' '}
                    Vous trouverez sur cette page notre <span className="text-primaryColor">formulaire de réservation</span> ! {' '}
                    Nous sommes impatients de vous faire frissonner !
                </h2>

                <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto p-8 rounded-lg shadow-lg">
                    
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="name">
                            Nom
                        </label>
                        <input
                            id="name"
                            name='name'
                            type="text"
                            value={formData.name}
                            onChange={handleChangeFormData}
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
                            name='firstname'
                            type="text"
                            value={formData.firstname}
                            onChange={handleChangeFormData}
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
                            name='email'
                            type="email"
                            value={formData.email}
                            onChange={handleChangeFormData}
                            placeholder="Adresse mail"
                            required
                            className="w-full p-3 bg-white text-black border border-borderColor rounded focus:outline-none focus:ring-2 focus:ring-primaryColor"
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="ticketType">
                            Type de ticket
                        </label>
                        <div className='flex flex-col gap-2 '>
                            {
                                tickets.map((ticket) => {
                                    return (
                                        <div key={ticket.id} className='flex gap-4 border-y justify-between p-2'>
                                            <div className='flex gap-4'>
                                                <input type="checkbox" name={`ticket-${ticket.id}`} id={`ticket-${ticket.id}`}  onChange={() => handleTicketSelection(ticket)}/>
                                                <label htmlFor={`ticket-${ticket.id}`}>{ticket.name} - {ticket.price}€</label>
                                            </div>
                                            {
                                                ticketsChoice.filter(t => t.id === ticket.id).map((t) => {
                                                    return (
                                                        <div key={t.id} className='flex gap-4 items-center justify-center'>
                                                            <label htmlFor="">Quantité : </label>
                                                            <input type="number" name="quantity" value="0" id="" className='max-w-[45px]'/>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2" htmlFor="desiredDate">
                            Date de visite souhaitée
                        </label>
                        <input
                            id="desiredDate"
                            type="date"
                            name='date'
                            value={formData.date}
                            onChange={handleChangeFormData}
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
                            value={Number(formData.totalPrice).toFixed(2)}
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
