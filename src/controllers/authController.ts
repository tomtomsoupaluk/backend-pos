import { Request, Response, NextFunction } from "express";
import { getUserByUsernameService } from "../services/userService";
import { comparePassword, generateToken } from "../utils/encryption";
import { successResponse, errorResponse } from "../utils/apiResponse";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserByUsernameService(req.body.username);
    if (!user) return errorResponse(res, "User not found", 404, null);

    const isPasswordValid = comparePassword(
      req.body.password,
      user.password as string
    );
    if (!isPasswordValid)
      return errorResponse(res, "Invalid password", 400, null);

    const token = generateToken({ id: user._id });

    const data = {
      user,
      token,
    };

    return successResponse(res, "User logged in successfully", data);
  } catch (error) {
    next(error);
  }
};

export const validateToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    return successResponse(res, "Token is valid", req.body);
  } catch (error) {
    next(error);
  }
};
