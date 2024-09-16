import { Router } from "express";
import * as ticketsController from "../controllers/ticketController.js"

const router = Router()

router.get("/api/tickets", ticketsController.getAllTickets)
router.get("/api/tickets/:id", ticketsController.getOneTicket)

export default router