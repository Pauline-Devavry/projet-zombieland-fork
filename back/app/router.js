import { Router } from "express";
import { catchErrors } from "./middlewares/catchErrors.js";
import { controller } from "./controllers/controller.js";
import * as userController from "./controllers/userController.js";
import * as attractionController from "./controllers/attractionController.js";
import * as categoryController from "./controllers/categoryController.js";
import * as reservationController from "./controllers/reservationController.js";
import * as messageController from "./controllers/messageController.js";
import * as ticketController from "./controllers/ticketController.js";

export const router = Router();

router.get("/", catchErrors(controller.get));

router.get("/attractions", catchErrors(attractionController.getAllAttractions));
router.get("/attraction/:id", catchErrors(attractionController.getOneAttraction));
router.post("/attraction", catchErrors(attractionController.createOneAttraction));
router.patch("/attraction/:id", catchErrors(attractionController.updateOneAttraction));
router.delete("/attraction/:id", catchErrors(attractionController.deleteOneAttraction));

router.get("/categories", catchErrors(categoryController.getAllCategory));
router.get("/category/:id", catchErrors(categoryController.getOneCategory));
router.post("/category", catchErrors(categoryController.createOneCategory));
router.patch("/category/:id", catchErrors(categoryController.updateOneCategory));
router.delete("/category/:id", catchErrors(categoryController.deleteOneCategory));

router.get("/reservations", catchErrors(reservationController.getAllReservations));
router.get("/reservation/:id", catchErrors(reservationController.getOneReservation));
router.patch("/reservation/:id", catchErrors(reservationController.updateOneReservation));
router.delete("/reservation/:id", catchErrors(reservationController.deleteOneReservation));

router.get("/tickets", catchErrors(ticketController.getAllTickets));
router.get("/ticket/:id", catchErrors(ticketController.getOneTicket));

router.get("/messages", catchErrors(messageController.getAllMessages));
router.get("/message/:id", catchErrors(messageController.getOneMessage));

// router.post("/register", catchErrors(userController.register));

