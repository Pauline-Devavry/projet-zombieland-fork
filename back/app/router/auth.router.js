import * as authController from "../controllers/authController.js"
import { Router } from "express";
import passport from "passport";

const router = Router()

router.post("/api/login", authController.login)
router.post("/api/register", authController.register)


export default router