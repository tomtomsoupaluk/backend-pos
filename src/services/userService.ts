import userModel, { IUser } from "../models/userModel";

export const getAllUsersService = async (): Promise<IUser[]> => {
  return await userModel.find();
};

export const getUserByIdService = async (id: string): Promise<IUser | null> => {
  return await userModel.findById(id);
};

export const createUserService = async (data: IUser): Promise<IUser> => {
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
