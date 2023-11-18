import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/apiResponse";
import {
  getDailySaleReport,
  getMonthlySaleReport,
  getWeeklySaleReport,
  getYesterdaySaleReport,
} from "../services/reportService";

export const getDailySaleReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailySaleReport = await getDailySaleReport();
    return successResponse(
      res,
      "Daily sale report fetched successfully",
      dailySaleReport
    );
  } catch (error) {
    next(error);
  }
};

export const getYesterdaySaleReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const yesterdaySaleReport = await getYesterdaySaleReport();
    return successResponse(
      res,
      "Yesterday sale report fetched successfully",
      yesterdaySaleReport
    );
  } catch (error) {
    next(error);
  }
};

export const getWeeklySaleReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const weeklySaleReport = await getWeeklySaleReport();
    return successResponse(
      res,
      "Weekly sale report fetched successfully",
      weeklySaleReport
    );
  } catch (error) {
    next(error);
  }
};

export const getMonthlySaleReportController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const monthlySaleReport = await getMonthlySaleReport();
    return successResponse(
      res,
      "Monthly sale report fetched successfully",
      monthlySaleReport
    );
  } catch (error) {
    next(error);
  }
};
