import { Router } from "express";
import * as messagesController from "../controllers/messageController.js"

const router = Router()

router.get("/messages", messagesController.getAllMessages)
router.get("/messages/:id", messagesController.getOneMessage)

export default router