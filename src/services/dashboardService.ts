import saleModel from "../models/saleModel";

export const getDailyIncomeService = async (): Promise<number> => {
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
  return sales.reduce((acc, sale) => acc + sale.total, 0);
};

export const getYesterdaysIncomeService = async (): Promise<number> => {
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
  return sales.reduce((acc, sale) => acc + sale.total, 0);
};

export const getWeeklyIncomeService = async (): Promise<number> => {
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
  return sales.reduce((acc, sale) => acc + sale.total, 0);
};

export const getMonthlyIncomeService = async (): Promise<number> => {
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
  return sales.reduce((acc, sale) => acc + sale.total, 0);
};
