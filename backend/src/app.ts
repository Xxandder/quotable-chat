import "dotenv/config";
import express from "express";
import connectDB from "./config/db";
import { requestLogger } from "./middleware/request-logger.middleware";
import { loggerService } from "./utils/logger";

const app = express();

const PORT = 3000;

connectDB();

app.use(requestLogger);

app.use("/", () => {});

app.listen(PORT, () => {
  loggerService.info(`Listening on port ${PORT}`)
});
