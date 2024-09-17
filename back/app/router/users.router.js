import { Router } from "express";
import * as userController from "../controllers/userController.js";
import passport from "passport";

const router = Router();

router.get("/api/users", userController.getAllUsers);
router.get("/api/users/:id", userController.getOneUser);

router.patch(
  "/api/users/:id",
  passport.authenticate("jwt", { session: false }),
  userController.updateUser
);

export default router;
