import saleItemModel, { ISaleItem } from "../models/saleItemModel";

export const createSaleItemService = async (
  data: ISaleItem
): Promise<ISaleItem> => {
  return await saleItemModel.create(data);
};
