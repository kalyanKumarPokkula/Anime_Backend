import express from "express";
import bodyParser from "body-parser";
import { PORT } from "./config/config.js";
import connect from "./config/db.js";
import cors from "cors";
import router from "./routes/index.js";

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

app.listen(PORT, async () => {
  connect();
  console.log(`Server started at port ${PORT}`);
});
