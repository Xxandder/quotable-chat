import { Request, Response, NextFunction } from 'express';
import { LoggerService } from '../utils/logger';

const logger = new LoggerService();

const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  logger.info('Incoming request', { method: req.method, url: req.url });
  next();
};

export { requestLogger };