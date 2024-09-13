import * as authController from "../controllers/authController.js"
import { Router } from "express";
import passport from "passport";

const router = Router()

router.post("/login", authController.login)
router.post("/register", authController.register)


export default router