import { Reservation, User } from "../models/Index.js";

export async function getAllReservations (req, res) {
    
    const reservations = await Reservation.findAll({
      include : User
    });
    
    return res.json(reservations).status(200);
  };

  export async function getOneReservation (req, res, next) {

    const id = Number(req.params.id)
    const ReservationId = await Reservation.findByPk(id, {include: User});
     if(ReservationId) {
        res.json(ReservationId).status(200)
     }
    else {
    
     next();
     }
    };

export async function updateOneReservation(req, res, next) {
    const id = Number(req.params.id)
  
    const { user_id, num_reservation, date_visit, status, total_price } = req.body;
    const reservation = await Reservation.findByPk(id);
  
    if (user_id) {
      reservation.user_id = user_id
    }
  
    if (num_reservation) {
        reservation.num_reservation = num_reservation
      }

      if (date_visit) {
        reservation.date_visit = date_visit
      }

      if (status) {
        reservation.status = status
      }

      if (total_price) {
        reservation.total_price = total_price
      }

      const updateOneRes = await Reservation.save();
  
    res.status(200).json(updateOneRes);

    };

export async function deleteOneReservation(req, res, next) {

    const id = Number(req.params.id);
      await Reservation.destroy({where : {id:id}});
      res.json("Vous venez d'effacer la réservation").status(204);
      
  };