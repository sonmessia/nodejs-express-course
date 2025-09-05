import { User } from "../models/User.js";
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import UnauthenticatedError from "../errors/unauthenticated.js";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
      name: string;
    };
  }
}

const authenticationMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  const token = authHeader.split(" ")[1];
  if (!token) {
    throw new UnauthenticatedError("Authentication invalid");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string; name: string };
    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      throw new UnauthenticatedError("Authentication invalid");
    }
    req.user = { id: user.id, name: user.name };
    next();
  } catch (error) {
    throw new UnauthenticatedError("Authentication invalid");
  }
};

export default authenticationMiddleware;
