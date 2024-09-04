import { Router } from "express";

import { controller } from "./controller/controller.js";
import { attractionController } from "./controller/attractionController.js";

export const router = Router();

router.get('/', controller.get);

router.get("/attractions", catchErrors(attractionController.getAll));
router.get("/attrcations/:id", catchErrors(attractionController.getOne));