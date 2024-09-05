import { Router } from "express";

import { controller } from "./controllers/controller.js";
import userController from "./controllers/userController.js";
import * as attractionController from "./controllers/attractionController.js";
import * as categoryController from "./controllers/categoryController.js";
import * as reservationController from "./controllers/reservationController.js";
import * as messageController from "./controllers/messageController.js";
import { ticketController } from "./controllers/ticketController.js";

export const router = Router();

router.get("/", controller.get);

router.get("/attractions", attractionController.getAllAttractions);
router.get("/attractions/:id", attractionController.getOneAttraction);
router.post("/attractions", attractionController.createOneAttraction);
router.patch("/attractions/:id", attractionController.updateOneAttraction);
router.delete("/attractions/:id", attractionController.deleteOneAttraction);

router.get("/category", categoryController.getAllCategory);
router.get("/category/:id", categoryController.getOneCategory);
router.post("/category/:id", categoryController.createOneCategory);
router.patch("/category/:id", categoryController.updateOneCategory);
router.delete("/category/:id", categoryController.deleteOneCategory);

router.get("/reservations", reservationController.getAllReservations);
router.get("/reservation/:id", reservationController.getOneReservation);
router.patch("/category/:id", reservationController.updateOneReservation);
router.delete("/category/:id", reservationController.deleteOneReservation);

router.get("/tickets", ticketController.getAllTickets);
router.get("/ticket/:id", ticketController.getOneTicket);

router.get("/messages", messageController.getAllMessages);

router.post("/register", userController.register);
