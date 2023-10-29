import saleModel, { ISale } from "../models/saleModel";

export const getLatestSale = async (): Promise<ISale | null> => {
  return await saleModel.findOne().sort({ createdAt: -1 });
};

export const createSaleService = async (data: ISale): Promise<ISale> => {
  return await saleModel.create(data);
};
