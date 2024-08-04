import { Request, Response, NextFunction } from "express";
import { loggerService } from "../utils/logger";

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  loggerService.info("Incoming request", { method: req.method, url: req.url });
  next();
};

export { requestLogger };
