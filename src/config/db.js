import mongoose from "mongoose";
import { DB_URL } from "./config.js";

const connect = () => {
  try {
    mongoose.connect(DB_URL);
    console.log("mongodb connected");
  } catch (error) {
    console.log("not able to connect to mongodb");
    console.log(error);
  }
};

export default connect;
