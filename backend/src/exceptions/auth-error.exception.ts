import { StatusCodes } from "http-status-codes";
import { ApiError } from "./api-error.exception";

type Constructor = {
  message: string;
  status: (typeof StatusCodes)[keyof typeof StatusCodes];
};

class AuthError extends ApiError {
  public constructor({
    message,
    status = StatusCodes.UNAUTHORIZED,
  }: Constructor) {
    super({ message, status });
  }
}

export { AuthError };
