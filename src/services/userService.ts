import userModel, { IUser } from "../models/userModel";
import { encryptPassword } from "../utils/encryption";

export const getAllUsersService = async (): Promise<IUser[]> => {
  return await userModel.find();
};

export const getUserByIdService = async (id: string): Promise<IUser | null> => {
  return await userModel.findById(id);
};

export const getUserByUsernameService = async (
  username: string
): Promise<IUser | null> => {
  return userModel.findOne({ username });
};

export const createUserService = async (data: IUser): Promise<IUser> => {
  data.password = encryptPassword(data.password);
  return await userModel.create(data);
};

export const updateUserService = async (
  id: string,
  data: IUser
): Promise<IUser | null> => {
  return await userModel.findByIdAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
};

export const deleteUserService = async (id: string): Promise<IUser | null> => {
  return await userModel.findByIdAndDelete(id);
};
