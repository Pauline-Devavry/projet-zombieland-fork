import { Reservation, User } from "../models/Index.js";
import Joi from "joi";
import { usePagination } from "../utils/pagination.js";

export async function getAllReservations(req, res) {

  const { limit, offset } = usePagination(req.query)

  const reservations = await Reservation.findAll({
    include: User,
    limit,
    offset
  });

  return res.json(reservations).status(200);
}

export async function getOneReservation(req, res, next) {
  const id = Number(req.params.id);
  const ReservationId = await Reservation.findByPk(id, { include: User });
  if (ReservationId) {
    res.json(ReservationId).status(200);
  } else {
    next();
  }
}

export async function updateOneReservation(req, res, next) {
  const reservationSchema = Joi.object({
    num_reservation: Joi.string().required(),
    date_visit: Joi.date().iso().required(),
    status: Joi.string().required(),
    total_price: Joi.number().required(),
    user_id: Joi.number().required(),
  });

  const { error } = reservationSchema.validate(req.body);
  if (error) {
    const errorMessage = { message: "Vous devez remplir tous les champs" };
    return res.status(400).json(errorMessage);
  }

  const id = Number(req.params.id);

  const { num_reservation, date_visit, status, total_price, user_id } =
    req.body;
  const reservation = await Reservation.findByPk(id);

  if (num_reservation) {
    reservation.num_reservation = num_reservation;
  }

  if (date_visit) {
    reservation.date_visit = date_visit;
  }

  if (status) {
    reservation.status = status;
  }

  if (total_price) {
    reservation.total_price = total_price;
  }

  if (user_id) {
    reservation.user_id = user_id;
  }
  const updateOneRes = await reservation.save();

  res.status(200).json({
    message: "La réservation a été modifiée avec succès.",
    reservation: updateOneRes,
  });
}

export async function createOneReservation(req, res) {

  const data = req.body

  console.log(data)

  res.json("Hello world")

}

export async function deleteOneReservation(req, res, next) {
  const id = Number(req.params.id);
  await Reservation.destroy({ where: { id: id } });
  res.json("Vous venez d'effacer la réservation").status(204);
}
