import { Router } from "express";

import { controller } from "./controller/controller.js";

export const router = Router();

router.get('/', controller.get);