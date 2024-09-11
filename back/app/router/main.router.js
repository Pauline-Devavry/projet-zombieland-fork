import { Router } from "express";
import attractionsRouter from "./attractions.router.js"
import categoriesRouter from "./categories.router.js"
import messagesRouter from "./messages.router.js"
import reservationsRouter from "./reservations.router.js"
import ticketsRouter from "./tickets.router.js"

const router = Router()

router.use(attractionsRouter)
router.use(categoriesRouter)
router.use(messagesRouter)
router.use(reservationsRouter)
router.use(ticketsRouter)


export default router