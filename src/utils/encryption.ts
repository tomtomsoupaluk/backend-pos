import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const encryptPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

export const generateToken = (payload: any) => {
  return jsonwebtoken.sign(payload, process.env.TOKEN as string, {
    expiresIn: "1d",
  });
};

export const verifyToken = (token: string) => {
  return jsonwebtoken.verify(token, process.env.TOKEN as string);
};
