import { StatusCodes } from "http-status-codes";

type Constructor = {
  message: string;
  status: (typeof StatusCodes)[keyof typeof StatusCodes];
};

class ApiError extends Error {
  message: string;

  status: (typeof StatusCodes)[keyof typeof StatusCodes];

  public constructor({ message, status }: Constructor) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export { ApiError };
