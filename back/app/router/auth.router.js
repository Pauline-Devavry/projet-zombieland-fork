import * as authController from "../controllers/authController.js"
import { Router } from "express";
import passport from "passport";

const router = Router()

router.post("/login", authController.login)


export default router