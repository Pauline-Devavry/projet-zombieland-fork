import { Router } from "express";
import { controller } from "./controllers/controller.js";
import * as userController from "./controllers/userController.js";
import * as attractionController from "./controllers/attractionController.js";
import * as categoryController from "./controllers/categoryController.js";
import * as reservationController from "./controllers/reservationController.js";
import * as messageController from "./controllers/messageController.js";
import * as ticketController from "./controllers/ticketController.js";

import AttractionRouter from "./router/attractions.router.js"

export const router = Router();

router.get("/", controller.get);

router.get("/reservations", reservationController.getAllReservations);
router.get("/reservation/:id", reservationController.getOneReservation);
router.patch("/reservation/:id", reservationController.updateOneReservation);
router.delete("/reservation/:id", reservationController.deleteOneReservation);

router.get("/tickets", ticketController.getAllTickets);
router.get("/ticket/:id", ticketController.getOneTicket);

router.get("/messages", messageController.getAllMessages);
router.get("/message/:id", messageController.getOneMessage);

// router.post("/register", userController.register);
