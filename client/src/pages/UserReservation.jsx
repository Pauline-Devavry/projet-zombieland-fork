import React, { useState} from "react";
import Container from "../components/Container"

function UserReservation() {
    const [numberReservation, setNumbeReservation] = useState('');
    const [dateVisit, setDateVisit] = useState('');
    const [quantityTickets, setQuantityTickets] = useState('');
    const [status, setStatus] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [cancelReservation, setCancelReservation] = useState('');

    const handleLogin = (event) => {
        event.preventDefault(); 

        console.log('Number Reservation:', numberReservation);
        console.log('Date Visite :', dateVisit);
        console.log('Quantity Tickets:', quantityTickets);
        console.log('Status:', status);
        console.log('Total Price:', totalPrice);
        console.log('Cancer Reservation:', cancelReservation);

    };

    return (

        <Container>

        <div className="min-h-screen bg-secondaryBackgroundColor p-8 font-rubik mb-6 mt-6">
            <h2 className="text-white text-2xl font-bold mb-6">Mes réservations</h2>
                <p className="text-white mb-8">
                    Vous voici sur la page <a href="/reservation" className="text-primaryColor">réservation</a>, vous pouvez effectuer votre réservation ci-dessous. 
                    Vous avez également la possibilité de modifier ou d’annuler votre réservation jusqu’à 10 jours avant la date de visite.
                </p>

        <div className="bg-backgroundColor p-8 rounded-lg shadow-lg">
            <form onSubmit={handleLogin} className="grid grid-cols-2 gap-8 text-white">
            {/* Première Colonne */}
        <div>
            <label htmlFor="numberReservation" className="block text-sm mb-2">Numéro de réservation</label>
                <input 
                    id="numberReservation"
                    type="text"
                    value={numberReservation}
                    onChange={(e) => setNumberReservation(e.target.value)}
                    className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                />
        </div>
            <div>
                <label htmlFor="numberReservation2" className="block text-sm mb-2">Numéro de réservation</label>
                    <input 
                        id="numberReservation2"
                        type="text"
                        value={numberReservation}
                        onChange={(e) => setNumberReservation(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>

            {/* Deuxième Colonne */}
            <div>
                <label htmlFor="dateVisit" className="block text-sm mb-2">Date de visite</label>
                    <input 
                        id="dateVisit"
                        type="date"
                        value={dateVisit}
                        onChange={(e) => setDateVisit(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>
            <div>
                <label htmlFor="dateVisit2" className="block text-sm mb-2">Date de visite</label>
                    <input 
                        id="dateVisit2"
                        type="date"
                        value={dateVisit}
                        onChange={(e) => setDateVisit(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>

            {/* Troisième Colonne */}
            <div>
                <label htmlFor="quantityTickets" className="block text-sm mb-2">Nombre de billet</label>
                    <input 
                        id="quantityTickets"
                        type="number"
                        value={quantityTickets}
                        onChange={(e) => setQuantityTickets(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>
            <div>
                <label htmlFor="quantityTickets2" className="block text-sm mb-2">Nombre de billet</label>
                    <input 
                        id="quantityTickets2"
                        type="number"
                        value={quantityTickets}
                        onChange={(e) => setQuantityTickets(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>

            {/* Quatrième Colonne */}
            <div>
                <label htmlFor="status" className="block text-sm mb-2">Statut</label>
                    <input 
                        id="status"
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>
            <div>
                <label htmlFor="status2" className="block text-sm mb-2">Statut</label>
                    <input 
                        id="status2"
                        type="text"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>

            {/* Cinquième Colonne */}
            <div>
                <label htmlFor="totalPrice" className="block text-sm mb-2">Prix total</label>
                    <input 
                        id="totalPrice"
                        type="text"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>
            <div>
                <label htmlFor="totalPrice2" className="block text-sm mb-2">Prix total</label>
                    <input 
                        id="totalPrice2"
                        type="text"
                        value={totalPrice}
                        onChange={(e) => setTotalPrice(e.target.value)}
                        className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                    />
            </div>

            {/* Sixième Colonne */}
            <div>
                <label htmlFor="cancelReservation" className="block text-sm mb-2">Annuler ma réservation</label>
                    <button 
                        type="button"
                        className="w-full p-3 bg-primaryColor text-white font-bold rounded hover:bg-red-700"
                        onClick={() => setCancelReservation('ANNULÉ')}
                    >
                        ANNULER
                    </button>
            </div>
            <div>
                <label htmlFor="cancelReservation2" className="block text-sm mb-2">Annuler ma réservation</label>
                    <button 
                        type="button"
                        className="w-full p-3 bg-primaryColor text-white font-bold rounded hover:bg-red-700"
                        onClick={() => setCancelReservation('ANNULÉ')}
                    >
                        ANNULER
                    </button>
            </div>
        </form>
    </div>
</div>

</Container>

);
}

export default UserReservation;