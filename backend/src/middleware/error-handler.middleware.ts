import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import ApiError from "../exceptions/api-error.exception";
import { loggerService } from "../utils/logger";
import { ErrorMessage } from "../enums/enums";

const errorHandler = (
  err: Error | ApiError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  loggerService.error(err.message);
  if (err instanceof ApiError) {
    return res.status(err.status).json({ message: err.message });
  }

  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: ErrorMessage.SOMETHING_WENT_WRONG });

  next();
};

export default errorHandler;
