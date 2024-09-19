import { Router } from "express"
import * as s3Controller from "../controllers/s3Controller.js"
import { uploadImageMiddleware } from "../utils/uploadImageMiddleware.js"

const router = Router()

router.post("/api/s3/upload-image", uploadImageMiddleware, s3Controller.uploadImageToBucket)

export default router