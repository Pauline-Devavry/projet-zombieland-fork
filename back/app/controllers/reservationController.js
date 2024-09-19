import {
  Reservation,
  User,
  Ticket,
  ReservationHasTicket,
} from "../models/Index.js";
import Joi from "joi";
import { usePagination } from "../utils/pagination.js";

export async function getAllReservations(req, res) {
  const { limit, offset } = usePagination(req.query);

  const totalReservations = await Reservation.count()

  const reservations = await Reservation.findAll({
    include: User,
    limit,
    offset,
  });

  const totalPages = Math.ceil(totalReservations / limit)

  return res.json({reservations, totalPages}).status(200);
}

export async function getOneReservation(req, res, next) {
  const id = Number(req.params.id);

    
    const reservation = await Reservation.findByPk(id, {
      include: [
        {
          model: User,
        },
        {
          model: Ticket,
          as: "tickets", 
          through: {
            attributes: ["quantity_ticket"], 
          },
        },
      ],
    });

    if (!reservation) {
      return res.status(404).json({ message: "Réservation non trouvée." });
    }

    
    const totalTickets = reservation.tickets.reduce(
      (acc, ticket) => acc + ticket.ReservationHasTicket.quantity_ticket,
      0
    );

    
    const updatedReservation = {
      ...reservation.dataValues,
      totalTickets: totalTickets,
    };

    res.status(200).json(updatedReservation);
}

export async function updateOneReservation(req, res, next) {
  const reservationSchema = Joi.object({
    date_visit: Joi.date().iso().optional(),
    status: Joi.string().optional(),
  });

  const { error, value } = reservationSchema.validate(req.body);
  if (error) {
    const errorMessage = { message: error };
    return res.status(400).json(errorMessage);
  }

  const id = Number(req.params.id);

  const reservation = await Reservation.findByPk(id)

  const updatedReservation = await reservation.update(value)

  res.status(200).json({
    message: "La réservation a été modifiée avec succès.",
    reservation: updatedReservation,
  });
}

export async function createOneReservation(req, res) {
  const userId = req.user.id;

  const ticketChoiceSchema = Joi.object({
    id: Joi.number().integer().required(),
    quantity: Joi.number().integer().min(1).required(),
    price: Joi.string()
      .regex(/^\d+(\.\d{1,2})?$/)
      .required(),
  });

  const reservationSchema = Joi.object({
    date: Joi.date().iso().required(),
    totalPrice: Joi.string()
      .regex(/^\d+(\.\d{1,2})?$/)
      .required(),
    ticketChoices: Joi.array().items(ticketChoiceSchema).min(1).required(),
  });

  const { error, value } = reservationSchema.validate(req.body);

  if (error) {
    return res.status(500).json({ erreur: "Données invalides." });
  }

  let totalTickets = 0;
  value.ticketChoices.forEach((ticket) => {
    totalTickets += ticket.quantity;
  });

  const newReservation = await Reservation.create({
    date_visit: value.date,
    status: "confirmée",
    total_price: value.totalPrice,
    user_id: userId,
  });

  const ticketChoicePromises = value.ticketChoices.map((ticket) => {
    return ReservationHasTicket.create({
      reservation_id: newReservation.id,
      ticket_id: ticket.id,
      quantity_ticket: ticket.quantity,
    });
  });

  await Promise.all(ticketChoicePromises);

  res.json({ message: "Réservation éffectué." });
}

export async function deleteOneReservation(req, res, next) {
  const userId = req.user.id;
  const reservationId = Number(req.params.id);

  const reservationRecord = await Reservation.findByPk(reservationId);

  if (!reservationRecord || reservationRecord.user_id !== userId) {
    return res
      .status(403)
      .json({ erreur: "Vous ne pouvez pas annuler cette réservation" });
  }

  const reservationDate = new Date(reservationRecord.date_visit);
  const currentDate = new Date();
  const differenceInTime = reservationDate.getTime() - currentDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  if (differenceInDays <= 10) {
    return res.status(403).json({
      erreur:
        "Annulation impossible, la date de réservation est dans moins de 10 jours",
    });
  }

  await reservationRecord.destroy();

  res.status(204).json({ message: "Vous venez d'effacer la réservation" });
}

export async function getUserReservations(req, res, next) {
  try {
    const userId = req.user.id;

    const reservations = await Reservation.findAll({
      where: { user_id: userId }, // Remplace par l'ID de l'utilisateur souhaité
      include: [
        {
          model: Ticket,
          as: "tickets", // Utilise l'alias défini dans les relations
          through: {
            attributes: ["quantity_ticket"], // Inclure la quantité de billets depuis la table de jointure
          },
        },
      ],
    });

    if (!reservations.length) {
      return res.status(200).json({ message: "Aucune réservation trouvée." });
    }

    const updatedReservations = reservations.map((reservation) => {
      const totalTickets = reservation.tickets.reduce(
        (acc, ticket) => acc + ticket.ReservationHasTicket.quantity_ticket,
        0
      );
      return {
        ...reservation.dataValues,
        totalTickets: totalTickets,
      };
    });

    res.status(200).json(updatedReservations);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des réservations",
      error,
    });
  }
}

export async function getTotalReservations(req, res) {
  const total = await Reservation.count()
  res.json({total})
}
