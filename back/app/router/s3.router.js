import { Router } from "express";
import * as s3Controller from "../controllers/s3Controller.js"
import multer from "multer";


const storage = multer.memoryStorage()
const upload = multer({storage})

const router = Router()

router.post("/api/s3/test", s3Controller.uploadMiddlware , s3Controller.uploadImageToS3)

export default router