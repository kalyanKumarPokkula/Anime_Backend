import * as dotenv from "dotenv";

dotenv.config();

const BUCKET_NAME = process.env.AWS_BUCKET_NAME;
const BUCKET_REGION = process.env.AWS_BUCKET_REGION;
const AWS_ACCESS_KEY = process.env.AWS_ACCESS_KEY;
const AWS_SECRET_KEY = process.env.AWS_SECRET_KEY;
const PORT = process.env.PORT;
const DB_URL = process.env.DB_URL;

export {
  BUCKET_NAME,
  BUCKET_REGION,
  AWS_ACCESS_KEY,
  AWS_SECRET_KEY,
  PORT,
  DB_URL,
};
