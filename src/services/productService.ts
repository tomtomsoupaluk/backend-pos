import ProductModel, { IProduct } from "../models/productModel";

export const getAllProductsService = async (): Promise<IProduct[]> => {
  return await ProductModel.find();
};

export const getProductByIdService = async (
  id: string
): Promise<IProduct | null> => {
  return await ProductModel.findById(id);
};

export const createProductService = async (
  data: IProduct
): Promise<IProduct> => {
  return await ProductModel.create(data);
};

export const updateProductService = async (
  id: string,
  data: IProduct
): Promise<IProduct | null> => {
  return await ProductModel.findByIdAndUpdate(
    {
      _id: id,
    },
    data,
    {
      new: true,
    }
  );
};

export const deleteProductService = async (
  id: string
): Promise<IProduct | null> => {
  return await ProductModel.findByIdAndDelete(id);
};
