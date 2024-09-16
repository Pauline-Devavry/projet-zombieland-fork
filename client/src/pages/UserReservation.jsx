import { useEffect, useState } from "react";
import Container from "../components/Container";
import axios from "axios";

function UserReservation() {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const userId = 2; // Remplace par l'ID de l'utilisateur connecté
        const response = await axios.get(
          `http://localhost:3000/reservations/user/${userId}`
        );
        setReservations(response.data);
      } catch (err) {
        console.error("Erreur lors de la récupération des réservations", err);
        setError(err);
      }
    };
    fetchReservations();
  }, []);

  const handleCancelReservation = (reservation) => {
    const currentDate = new Date();
    const reservationDate = new Date(reservation.date_visit);
    const timeDiff = reservationDate - currentDate;
    const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Différence en jours
    if (dayDiff < 10) {
      alert(
        "Votre réservation ne peut pas être annulée car elle est prévue dans moins de 10 jours. Les annulations doivent être effectuées au moins 10 jours avant la date de visite."
      );
    } else {
      // Logique pour annuler la réservation (requête à ton API)
      axios
        .delete(
          `http://localhost:3000/reservations/${reservation.num_reservation}`
        )
        .then(() => {
          alert("Votre réservation a été annulée avec succès.");
          setReservations((prevReservations) =>
            prevReservations.filter(
              (r) => r.num_reservation !== reservation.num_reservation
            )
          );
        })
        .catch((err) => {
          console.error("Erreur lors de l'annulation de la réservation", err);
          alert("Une erreur est survenue lors de l'annulation.");
        });
    }
  };
  if (error) {
    return (
      <Container>
        <p className="text-red-500">Erreur : {error.message}</p>
      </Container>
    );
  }
  return (
    <Container>
      <div className="min-h-screen bg-secondaryBackgroundColor p-8 font-rubik mb-8 mt-6">
        <h2 className="text-white text-2xl font-bold mb-6">Mes réservations</h2>
        {reservations.length > 0 ? (
          reservations.map((reservation) => (
            <div
              key={reservation.num_reservation}
              className="bg-backgroundColor p-8 rounded-lg shadow-lg mb-8"
            >
              <form className="grid grid-cols-2 gap-8 text-white">
                <div>
                  <label
                    htmlFor="numero de reservation"
                    className="block text-sm mb-2"
                  >
                    Numéro de réservation
                  </label>
                  <input
                    id={`num_reservation-${reservation.num_reservation}`}
                    name="num_reservation"
                    type="string"
                    value={reservation.num_reservation}
                    readOnly
                    className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="date de visite"
                    className="block text-sm mb-2"
                  >
                    Date de visite
                  </label>
                  <input
                    id={`date_visit-${reservation.date_visit}`}
                    name="date_visit"
                    type="date"
                    value={reservation.date_visit}
                    readOnly
                    className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                  />
                </div>
                <div>
                  <label
                    htmlFor="nombre de billets"
                    className="block text-sm mb-2"
                  >
                    Nombre de billets
                  </label>
                  <input
                    id={`quantity_ticket-${reservation.tickets[0]?.ReservationHasTicket.quantity_ticket}`}
                    name="quantity_ticket"
                    type="number"
                    value={
                      reservation.tickets[0]?.ReservationHasTicket
                        ?.quantity_ticket || 0
                    }
                    readOnly
                    className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="statut" className="block text-sm mb-2">
                    Statut
                  </label>
                  <input
                    id={`status-${reservation.status}`}
                    name="status"
                    type="text"
                    value={reservation.status}
                    readOnly
                    className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="prix total" className="block text-sm mb-2">
                    Prix total
                  </label>
                  <input
                    id={`total_price-${reservation.total_price}`}
                    name="total_price"
                    type="text"
                    value={reservation.total_price}
                    readOnly
                    className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
                  />
                </div>
                <div>
                  <button
                    type="button"
                    className="w-full p-3 bg-secondaryBackgroundColor text-white font-bold rounded hover:bg-primaryColor"
                    onClick={() => handleCancelReservation(reservation)}
                  >
                    ANNULER
                  </button>
                </div>
              </form>
            </div>
          ))
        ) : (
          <p className="text-white">Aucune réservation trouvée</p>
        )}
      </div>
    </Container>
  );
}
export default UserReservation;

// import { useEffect, useState } from "react";
// import Container from "../components/Container";
// import axios from "axios";

// function UserReservation() {
//   const [reservations, setReservations] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchReservations = async () => {
//       try {
//         const userId = 2;
//         const response = await axios.get(
//           `http://localhost:3000/reservations/user/${userId}`
//         );
//         setReservations(response.data);
//         console.log(
//           response.data[0].tickets[0].ReservationHasTicket.quantity_ticket
//         );
//       } catch (err) {
//         console.error("Erreur lors de la récupération des réservations", err);
//         setError(err);
//       }
//     };

//     fetchReservations();
//   }, []);

//   if (error) {
//     return (
//       <Container>
//         <p className="text-red-500">Erreur : {error.message}</p>
//       </Container>
//     );
//   }

//   return (
//     <Container>
//       <div className="min-h-screen bg-secondaryBackgroundColor p-8 font-rubik mb-8 mt-6">
//         <h2 className="text-white text-2xl font-bold mb-6">Mes réservations</h2>
//         {reservations.length > 0 ? (
//           reservations.map((reservation) => (
//             <div
//               key={reservation.num_reservation}
//               className="bg-backgroundColor p-8 rounded-lg shadow-lg mb-8"
//             >
//               <form className="grid grid-cols-2 gap-8 text-white">
//                 <div>
//                   <label
//                     htmlFor="numero de reservation"
//                     className="block text-sm mb-2"
//                   >
//                     Numéro de réservation
//                   </label>
//                   <input
//                     id={`num_reservation-${reservation.num_reservation}`}
//                     name="num_reservation"
//                     type="string"
//                     value={reservation.num_reservation}
//                     readOnly
//                     className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="date de visite"
//                     className="block text-sm mb-2"
//                   >
//                     Date de visite
//                   </label>
//                   <input
//                     id={`date_visit-${reservation.date_visit}`}
//                     name="date_visit"
//                     type="date"
//                     value={reservation.date_visit}
//                     readOnly
//                     className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="nombre de billets"
//                     className="block text-sm mb-2"
//                   >
//                     Nombre de billets
//                   </label>
//                   <input
//                     // id={`quantity_ticket-${reservation.tickets.ReservationHasTicket.quantity_ticket}`}
//                     name="quantity_ticket"
//                     type="number"
//                     value={
//                       reservations[0].tickets[0].ReservationHasTicket
//                         .quantity_ticket
//                     }
//                     readOnly
//                     className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="statut" className="block text-sm mb-2">
//                     Statut
//                   </label>
//                   <input
//                     id={`status-${reservation.status}`}
//                     name="status"
//                     type="text"
//                     value={reservation.status}
//                     readOnly
//                     className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
//                   />
//                 </div>

//                 <div>
//                   <label htmlFor="prix total" className="block text-sm mb-2">
//                     Prix total
//                   </label>
//                   <input
//                     id={`total_price-${reservation.total_price}`}
//                     name="total_price"
//                     type="text"
//                     value={reservation.total_price}
//                     readOnly
//                     className="w-full p-3 bg-secondaryBackgroundColor rounded border border-gray-700"
//                   />
//                 </div>

//                 <div>
//                   <button
//                     type="button"
//                     className="w-full p-3 bg-secondaryBackgroundColor text-white font-bold rounded hover:bg-primaryColor"
//                     onClick={() => alert("Réservation annulée !")}
//                   >
//                     ANNULER
//                   </button>
//                 </div>
//               </form>
//             </div>
//           ))
//         ) : (
//           <p className="text-white">Aucune réservation trouvée</p>
//         )}
//       </div>
//     </Container>
//   );
// }

// export default UserReservation;
