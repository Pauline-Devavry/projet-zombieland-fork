import { Router } from "express";

import { controller } from "./controllers/controller.js";
import { attractionController } from "./controllers/attractionController.js";
import userController from "./controllers/userController.js";

export const router = Router();
router.get("/", controller.get);

router.get("/attractions", attractionController.getAll);
router.get("/attrcations/:id", attractionController.getOne);

router.post("/register", userController.register);
