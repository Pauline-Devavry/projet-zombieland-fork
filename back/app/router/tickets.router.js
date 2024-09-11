import { Router } from "express";
import * as ticketsController from "../controllers/ticketController.js"

const router = Router()

router.get("/tickets", ticketsController.getAllTickets)
router.get("/tickets/:id", ticketsController.getOneTicket)

export default router