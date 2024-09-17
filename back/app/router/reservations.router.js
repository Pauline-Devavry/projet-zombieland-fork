import * as reservationsController from "../controllers/reservationController.js";
import { Router } from "express";
import passport from "passport";

const router = Router();

router.get("/api/reservations", reservationsController.getAllReservations);

router.get(
  "/api/reservations/user/",
  passport.authenticate("jwt", {session: false}),
  reservationsController.getUserReservations
);

router.get("/api/reservations/:id", reservationsController.getOneReservation);

router.patch(
  "/api/reservations/:id",
  reservationsController.updateOneReservation
);

router.delete(
  "/api/reservations/:id",
  passport.authenticate("jwt", {session: false}),
  reservationsController.deleteOneReservation
);

export default router;
