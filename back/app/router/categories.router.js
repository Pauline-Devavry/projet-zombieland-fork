
import { Router } from "express";
import * as categoriesController from "../controllers/categoryController.js"

const router = Router()

router.get("/api/categories", categoriesController.getAllCategory)
router.get("/api/categories/:id", categoriesController.getOneCategory)
router.post("/api/categories", categoriesController.createOneCategory)
router.patch("/api/categories/:id", categoriesController.updateOneCategory)
router.delete("/api/categories/:id", categoriesController.updateOneCategory)


export default router