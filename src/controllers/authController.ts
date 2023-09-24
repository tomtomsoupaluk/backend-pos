import { Request, Response, NextFunction } from "express";
import { getUserByUsernameService } from "../services/userService";
import { comparePassword, generateToken } from "../utils/encryption";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await getUserByUsernameService(req.body.username);
    if (!user) throw new Error("User not found");

    const isPasswordValid = comparePassword(
      req.body.password,
      user.password as string
    );
    if (!isPasswordValid) throw new Error("Invalid password");

    const token = generateToken({ id: user._id });

    const data = {
      user,
      token,
    };

    return res.send(data);
  } catch (error) {
    next(error);
  }
};
