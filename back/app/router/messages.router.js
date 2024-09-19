import { Router } from "express";
import * as messagesController from "../controllers/messageController.js"

const router = Router()

router.get("/api/messages", messagesController.getAllMessages)
router.get("/api/messages/total", messagesController.getTotalMessages)
router.get("/api/messages/:id", messagesController.getOneMessage)
router.post("/api/messages", messagesController.createOneMessage)

export default router