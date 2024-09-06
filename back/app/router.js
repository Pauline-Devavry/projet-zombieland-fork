import { Router } from "express";

import { controller } from "./controllers/controller.js";
import * as userController from "./controllers/userController.js";
import * as attractionController from "./controllers/attractionController.js";
import * as categoryController from "./controllers/categoryController.js";
import * as reservationController from "./controllers/reservationController.js";
import * as messageController from "./controllers/messageController.js";
import * as ticketController from "./controllers/ticketController.js";

export const router = Router();

router.get("/", controller.get);

router.get("/attractions", attractionController.getAllAttractions);
router.get("/attraction/:id", attractionController.getOneAttraction);
router.post("/attraction", attractionController.createOneAttraction);
router.patch("/attraction/:id", attractionController.updateOneAttraction);
router.delete("/attraction/:id", attractionController.deleteOneAttraction);

router.get("/categories", categoryController.getAllCategory);
router.get("/category/:id", categoryController.getOneCategory);
router.post("/category", categoryController.createOneCategory);
router.patch("/category/:id", categoryController.updateOneCategory);
router.delete("/category/:id", categoryController.deleteOneCategory);

router.get("/reservations", reservationController.getAllReservations);
router.get("/reservation/:id", reservationController.getOneReservation);
router.patch("/reservation/:id", reservationController.updateOneReservation);
router.delete("/reservation/:id", reservationController.deleteOneReservation);

router.get("/tickets", ticketController.getAllTickets);
router.get("/ticket/:id", ticketController.getOneTicket);

router.get("/messages", messageController.getAllMessages);
router.get("/message/:id", messageController.getOneMessage);

// router.post("/register", userController.register);
