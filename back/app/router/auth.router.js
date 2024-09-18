import * as authController from "../controllers/authController.js"
import { Router } from "express";
import passport from "passport";

const router = Router()

router.post("/api/auth/login", authController.login)
router.post("/api/auth/register", authController.register)
router.post("/api/auth/refresh", authController.refreshAccessToken)
router.get("/api/auth/me", passport.authenticate("jwt", {session: false}) , authController.getUserDetails)
router.get("/api/auth/check-token", authController.checkRefreshToken)
router.post("/api/auth/logout", passport.authenticate("jwt", {session: false}), authController.logout)


export default router