import { Ticket } from "../models/Index.js";

export async function getAllTickets(req, res) {
  const tickets = await Ticket.findAll();
  return res.json(tickets).status(200);
}

export async function getOneTicket(req, res, next) {
  const id = Number(req.params.id);
  const ticket = await Ticket.findByPk(id);
  if (ticket) {
    res.json(ticket).status(200);
  } else {
    next();
  }
}
