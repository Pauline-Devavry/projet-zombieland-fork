
import * as reservationsController from "../controllers/reservationController.js"
import { Router } from "express"

const router = Router()

router.get("/api/reservations", reservationsController.getAllReservations)
router.get("/api/reservations/:id", reservationsController.getOneReservation)
router.patch("/api/reservations/:id", reservationsController.updateOneReservation)
router.delete("/api/reservations/:id", reservationsController.deleteOneReservation)
router.post("/api/reservations", reservationsController.createOneReservation)

export default router