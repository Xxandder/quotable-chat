import "dotenv/config";
import express from "express";
import session from "express-session";
import connectDB from "./config/db";
import { requestLogger } from "./middleware/request-logger.middleware";
import { loggerService } from "./utils/logger";


const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(session({
  secret: process.env?.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

const PORT = 3000;

connectDB();

app.use(requestLogger);

app.use("/", () => {});

app.listen(PORT, () => {
  loggerService.info(`Listening on port ${PORT}`);
});
