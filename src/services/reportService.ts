import saleModel, { ISale } from "../models/saleModel";

export const getDailySaleReport = async (): Promise<ISale[]> => {
  const today = new Date();
  const start = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );
  const end = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  const sales = await saleModel.find({
    createdAt: {
      $gte: start,
      $lt: end,
    },
  });
  return sales;
};

export const getYesterdaySaleReport = async (): Promise<ISale[]> => {
  const today = new Date();
  const start = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 1
  );
  const end = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const sales = await saleModel.find({
    createdAt: {
      $gte: start,
      $lt: end,
    },
  });
  return sales;
};

export const getWeeklySaleReport = async (): Promise<ISale[]> => {
  const today = new Date();
  const start = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() - 7
  );
  const end = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  const sales = await saleModel.find({
    createdAt: {
      $gte: start,
      $lt: end,
    },
  });
  return sales;
};

export const getMonthlySaleReport = async (): Promise<ISale[]> => {
  const today = new Date();
  const start = new Date(
    today.getFullYear(),
    today.getMonth() - 1,
    today.getDate()
  );
  const end = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 1
  );
  const sales = await saleModel.find({
    createdAt: {
      $gte: start,
      $lt: end,
    },
  });
  return sales;
};
