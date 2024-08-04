import "dotenv/config";
import express from "express";
import session from "express-session";
import connectDB from "./config/db";
import { requestLogger } from "./middleware/request-logger.middleware";
import { loggerService } from "./utils/logger";

import { router } from "./routes/routes";

import { initPassport } from "./config/passport";

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use(session({
  secret: process.env?.SESSION_SECRET as string,
  resave: false,
  saveUninitialized: false
}));

initPassport(app)

const PORT = 3000;

connectDB();

app.use(requestLogger);

app.use('/', router)

app.listen(PORT, () => {
  loggerService.info(`Listening on port ${PORT}`);
});
