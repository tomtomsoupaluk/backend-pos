import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utils/apiResponse";
import { verifyToken } from "../utils/encryption";

//authenticates user
export const authenticateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //get token from bearer header
    const authorizationHeader = req.headers.authorization;

    //check if token exists
    if (!authorizationHeader)
      return errorResponse(res, "Token not found", 401, {});

    //get token
    const token = authorizationHeader.split(" ")[1];

    //verify token
    const decoded = await verifyToken(token);
    if (!decoded) return errorResponse(res, "Invalid token", 401, {});

    next();
  } catch (err) {
    next(err);
  }
};
