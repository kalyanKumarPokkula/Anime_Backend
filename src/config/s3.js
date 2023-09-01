import aws from "aws-sdk";
import fs from "fs";
// import multer from "multer";
// import multerS3 from "multer-s3";
import {
  BUCKET_NAME,
  BUCKET_REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
} from "./config.js";

aws.config.update({
  region: BUCKET_REGION,
  secretAccessKey: AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
});

const s3 = new aws.S3();

export default function uploadFile(file) {
  // const fileStream = fs.createReadStream(file.path);

  const uploadParams = {
    Bucket: BUCKET_NAME,
    Body: fs.readFileSync(file.path),
    Key: file.originalname,
    ContentType: file.mimetype,
  };

  return s3.upload(uploadParams).promise();
}
