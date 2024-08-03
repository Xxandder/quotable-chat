"use strict";
import "dotenv/config";
import express from "express";
import connectDB from "./config/db";
import { requestLogger } from "./middleware/request-logger.middleware";

const app = express();

const PORT = 3000;

connectDB();

app.use(requestLogger);

app.use("/", () => {});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
