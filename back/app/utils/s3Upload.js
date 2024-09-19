import 'dotenv/config'
import aws from "aws-sdk";
import multer from "multer"
import { S3Client } from "@aws-sdk/client-s3"; 
import { Upload } from "@aws-sdk/lib-storage";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export const uploadMiddlware = upload.single('image')

export const uploadImageToS3 = async (req, res) => {
    try {

        const s3Client = new S3Client({
            region: "eu-north-1",
            credentials: {
                accessKeyId: "AKIA4SDNVOO2DYCWXZYX",
                secretAccessKey: "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"
            }
        })

        const file = req.file;
        const paralleUploads3 = new Upload({
            client: s3Client,
            params: {
                Bucket: "zombiebucket-papaye",
                Key: `${Date.now().toString()}_${file.originalname}`,
                Body: file.buffer,
                ContentType: file.mimetype 
            }
        })

        const data = await paralleUploads3.done()
        res.json({message: "Images uploadé avec succées", fileUrl: data.Location})
    } catch(err) {
        console.log(err)
    }
}

