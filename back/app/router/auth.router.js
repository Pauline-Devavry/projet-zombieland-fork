import * as authController from "../controllers/authController.js"
import { Router } from "express";
import passport from "passport";

const router = Router()

router.post("/api/auth/login", authController.login)
router.post("/api/auth/register", authController.register)
router.post("/api/auth/refresh", authController.refreshAccessToken)
router.get("/api/auth/me", passport.authenticate("jwt", {session: false}) , authController.getUserDetails)


export default router