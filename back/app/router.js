import { Router } from "express";

import { controller } from "./controllers/controller.js";
import { attractionController } from "./controllers/attractionController.js";

export const router = Router();

router.get('/', controller.get);

router.get("/attractions", catchErrors(attractionController.getAll));
router.get("/attrcations/:id", catchErrors(attractionController.getOne));