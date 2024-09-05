import { Ticket } from "../models/Index.js";

const ticketController = {
  async getAllTickets(req, res) {
    const tickets = await Ticket.findAll();
    return res.json(tickets).status(200);
  },

  async getOneTicket(req, res, next) {
    const id = Number(req.params.id);
    const ticket = await Ticket.findByPk(id);
    if (ticket) {
      res.json(ticket).status(200);
    } else {
      next();
    }
  },
};

export { ticketController };
