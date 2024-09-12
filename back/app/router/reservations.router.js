
import * as reservationsController from "../controllers/reservationController.js"
import { Router } from "express"

const router = Router()

router.get("/reservations", reservationsController.getAllReservations)
router.get("/reservations/:id", reservationsController.getOneReservation)
router.patch("/reservations/:id", reservationsController.updateOneReservation)
router.delete("/reservations/:id", reservationsController.deleteOneReservation)

export default router