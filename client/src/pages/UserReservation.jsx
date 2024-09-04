import React, { useState} from "react";

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
        <div className="min-h-screen bg-secondaryBackgroundColor p-8 font-rubik">
            <h2 className="text-white text-2xl font-bold mb-6">Mes réservations</h2>
            <p className="text-white mb-8">
                Vous voici sur la page <a href="/reservation" className="text-primaryColor">réservation</a>, vous pouvez effectuer votre réservation ci-dessous. 
                Vous avez également la possibilité de modifier ou d’annuler votre réservation jusqu’à 10 jours avant la date de visite.
            </p>
        </div>

    )
}

