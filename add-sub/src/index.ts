import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import StatusCodes from "http-status-codes";
import setupRoute from "./routes";
import log from "./utils/logger";

//* Basic Setup
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
dotenv.config({ path: "./.env" });

//* Root route
app.get("/", (req, res) => {
  res.status(StatusCodes.OK).send("Hi!");
});

//* Setup Route
setupRoute(app);

//* Listening
const hostname = process.env.SERVER_HOSTNAME;
const port = process.env.SERVER_PORT;
app.listen(port, async () => {
  log.info(`Server started at http://${hostname}:${port}`);
});

export default app;
