
import { Router } from "express";
import * as categoriesController from "../controllers/categoryController.js"

const router = Router()

router.get("/categories", categoriesController.getAllCategory)
router.get("/categories/:id", categoriesController.getOneCategory)
router.post("/categories", categoriesController.createOneCategory)
router.patch("/categories/:id", categoriesController.updateOneCategory)
router.delete("/categories/:id", categoriesController.updateOneCategory)


export default router