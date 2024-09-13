import { Router } from "express";
import * as userController from "../controllers/userController.js"

const router = Router()

router.get("/api/users", userController.getAllUsers)
router.get("/api/users/:id", userController.getOneUser)

export default router