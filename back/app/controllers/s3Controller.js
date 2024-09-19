
import { S3Client } from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import "dotenv/config";

export async function uploadImageToBucket(req, res, next) {

    const { file } = req

    if(!file) {
        return res.status(400).json({message: "Aucun fichier présent"})
    }

    const valideMimetype = [
        "image/jpg",
        "image/png"
    ]

    const isValidMimetype = valideMimetype.includes(file.mimetype)

    if(!isValidMimetype) {
        return res.status(400).json({message: "Image only in jpg/png"})
    }

    const uploadImage = new Upload({
        client: new S3Client({
            region: process.env.S3_BUCKET_REGION,
            credentials: {
                accessKeyId: process.env.S3_ACCESS_KEY,
                secretAccessKey: process.env.S3_ACCESS_SECRET_KEY
            }
        }),
        params: {
            Bucket: process.env.S3_BUCKET_NAME,
            Key: `${Date.now().toString()}_${file.originalname}`,
            Body: file.buffer,
            ContentType: file.mimetype
        }
    })

    const data = await uploadImage.done()
    res.json({imgUrl: data.Location})

}