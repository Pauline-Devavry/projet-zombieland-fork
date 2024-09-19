import aws from "aws-sdk";
import multer from "multer"
import { Upload } from "@aws-sdk/lib-storage";

aws.config.update({
    accessKeyId: "AKIA4SDNVOO2DYCWXZYX",
    secretAccessKey: "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",
    region: "eu-north-1"
})

const s3 = new aws.S3()
const storage = multer.memoryStorage();
const upload = multer({storage: storage})

export const uploadImageToS3 = async (req, res) => {
    try {

        const file = req.file;
        const paralleUploads3 = new Upload({
            client: new AWS.S3(),
            params: {
                Bucket: "zombiebucket-papaye",
                Key: `${Date.now().toString()}_${file.originalname}`,
                Body: file.buffer,
                ContentType: file.mimeType 
            }
        })

        const data = await paralleUploads3.done()
        req.status(200).json({message: "Images uploadé avec succées", fileUrl: data.Location})
    } catch(err) {
        console.log("erruer lors de l'upload")
    }
}

export const uploadMiddlware = upload.single('image')