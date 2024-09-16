import * as reservationsController from "../controllers/reservationController.js";
import { Router } from "express";

const router = Router();

router.get("/api/reservations", reservationsController.getAllReservations)
router.get("/api/reservations/:id", reservationsController.getOneReservation)
router.get(
  "/reservations/user/:userId",
  reservationsController.getReservationsByUserId
);
router.patch("/api/reservations/:id", reservationsController.updateOneReservation)
router.delete("/api/reservations/:id", reservationsController.deleteOneReservation)

export default router

