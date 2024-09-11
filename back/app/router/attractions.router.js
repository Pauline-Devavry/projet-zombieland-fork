import { Router } from "express";
import * as attractionController from "../controllers/attractionController.js"

const router = Router()

router.get("/attractions", attractionController.getAllAttractions)
router.get("/attractions/:id", attractionController.getOneAttraction)
router.post("/attractions", attractionController.createOneAttraction)
router.patch("/attractions/:id", attractionController.updateOneAttraction)
router.delete("/attractions/:id", attractionController.deleteOneAttraction)

export default router