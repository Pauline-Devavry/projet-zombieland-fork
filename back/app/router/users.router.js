import { Router } from "express";
import * as userController from "../controllers/userController.js"

const router = Router()

router.get("/users", userController.getAllUsers)
router.get("/users/:id", userController.getOneUser)

router.post("/register", userController.register)


export default router