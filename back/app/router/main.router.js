import { Router } from "express";
import attractionsRouter from "./attractions.router.js"
import categoriesRouter from "./categories.router.js"
import messagesRouter from "./messages.router.js"
import reservationsRouter from "./reservations.router.js"
import ticketsRouter from "./tickets.router.js"
import usersRouter from "./users.router.js"
import authRouter from "./auth.router.js"
import s3Router from "./s3.router.js"

const router = Router()

router.use(attractionsRouter)
router.use(categoriesRouter)
router.use(messagesRouter)
router.use(reservationsRouter)
router.use(ticketsRouter)
router.use(usersRouter)
router.use(authRouter)
router.use(s3Router)

export default router