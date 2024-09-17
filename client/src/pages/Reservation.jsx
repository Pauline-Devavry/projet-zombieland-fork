import { useState } from 'react';
import { useEffect } from 'react';
import { api } from '../api/axiosConfig';
import RedShadow from "../components/ui/RedShadow.jsx"
import Container from "../components/Container.jsx"
import zombieGif from "../assets/gif/zombie.gif"
import runningPenguin from "../assets/gif/cartoon-run.gif"

function Reservation() {

    const [tickets, setTickets] = useState([])

    const [formData, setFormData] = useState({
        date: "",
        totalPrice: 0,
        ticketChoices: []
    })

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

    useEffect(() => {
        const total = formData.ticketChoices.reduce((sum, ticket) => {
            return sum + (ticket.quantity * ticket.price)
        }, 0)
        setFormData(prev => ({...prev, totalPrice: total.toFixed(2)}))
    }, [formData.ticketChoices])


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await api.post("/reservations", formData)
        } catch (err) {
            console.log(err)
        }
    };

    const handleChangeFormData = (e) => {
        const { name, value} = e.target
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleTicketSelection = (ticket) => {
        setFormData((prev) => {
            const isChecked = prev.ticketChoices.find(t => t.id === ticket.id);
            if (isChecked) {
                return {
                    ...prev,
                    ticketChoices: prev.ticketChoices.filter(t => t.id !== ticket.id)
                };
            } else {
                return {
                    ...prev,
                    ticketChoices: [...prev.ticketChoices, {id: ticket.id, quantity: 1, price: ticket.price}]
                };
            }
        });
    }

    const handleQuantityChange = (ticketId, newQuantity) => {
        setFormData((prev) => {
            return {
                ...prev,
                ticketChoices: prev.ticketChoices.map((ticket) => {
                    return ticket.id === ticketId ? { ...ticket, quantity: parseInt(newQuantity) } : ticket
                })
            }
        })
    }

    return (
        
        <div className='overflow-hidden'>

            <Container className="mx-auto z-20 flex flex-col justify-center items-center text-white font-rubik relative py-8">
                        <div className="w-full mb-20 z-10">
                            <h2 className="mb-6 text-center text-heading2-desktop">
                                Planifier votre visite
                            </h2>

                            <form onSubmit={handleSubmit} className="max-w-[600px] mx-auto p-8 rounded-lg shadow-lg">

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
                                                            <input 
                                                                type="checkbox" 
                                                                name={`ticket-${ticket.id}`} 
                                                                id={`ticket-${ticket.id}`}  
                                                                onChange={() => handleTicketSelection(ticket)} 
                                                                className="appearance-none h-6 w-6 border border-gray-300 rounded-md checked:bg-red-500 checked:border-red-500 focus:outline-none checked:before:content-['✔'] checked:before:text-white checked:before:text-sm checked:before:block checked:before:text-center cursor-pointer"
                                                            />
                                                            <label htmlFor={`ticket-${ticket.id}`} className='cursor-pointer'>{ticket.name} - {ticket.price}€</label>
                                                        </div>
                                                        {
                                                            formData.ticketChoices.filter(t => t.id === ticket.id).map((t) => {
                                                                return (
                                                                    <div key={t.id} className='flex gap-4 items-center justify-center'>
                                                                        <label htmlFor="">Quantité : </label>
                                                                        <input type="number" name="quantity" id="" className='max-w-[45px] text-black text-center' 
                                                                        onChange={(e) => handleQuantityChange(ticket.id, e.target.value)}
                                                                        value={formData.ticketChoices.find(t => t.id === ticket.id).quantity}
                                                                        />
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
                                        value={`${formData.totalPrice} €`}
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

                        
                        <img src={zombieGif} alt=" " className='h-[150px] absolute bottom-0 left-32  -z-30 animate-zombieRun'/>
                        <img src={runningPenguin} alt=" " className='h-[100px]  absolute bottom-0 left-32  -z-30 animate-penguinRun '/>
            

            </Container>

        </div>
    );
}

export default Reservation;