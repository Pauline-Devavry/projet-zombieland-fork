import { Router } from "express";
import * as attractionController from "../controllers/attractionController.js"

const router = Router()

router.get("/api/attractions", attractionController.getAllAttractions)
router.get("/api/attractions/:id", attractionController.getOneAttraction)
router.post("/api/attractions", attractionController.createOneAttraction)
router.patch("/api/attractions/:id", attractionController.updateOneAttraction)
router.delete("/api/attractions/:id", attractionController.deleteOneAttraction)

export default router