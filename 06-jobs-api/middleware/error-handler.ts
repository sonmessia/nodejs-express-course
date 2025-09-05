import { StatusCodes } from "http-status-codes";
import type { Request, Response, NextFunction } from "express";

const errorHandlerMiddleware = (
  err: {
    statusCode?: number;
    message?: string;
    name?: string;
    code?: number;
    errors: Record<string, { message: string }>;
    value?: string;
    keyValue: Record<string, unknown>;
  },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    message: err.message || "Something went wrong, please try again later",
  };

  if (err.name === "ValidationError") {
    customError.message = Object.values(err.errors)
      .map((item: { message: string }) => item.message)
      .join(", ");
    customError.statusCode = 400;
  }
  if (err.code && err.code === 11000) {
    customError.message = `Duplicate value entered for ${Object.keys(
      err.keyValue
    )} field, please choose another value`;
    customError.statusCode = 400;
  }
  if (err.name === "CastError") {
    customError.message = `No item found with id : ${err.value}`;
    customError.statusCode = 404;
  }
  return res.status(customError.statusCode).json({ msg: customError.message });
};

export default errorHandlerMiddleware;
