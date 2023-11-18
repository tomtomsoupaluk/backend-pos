import { Request, Response, NextFunction } from "express";
import { successResponse } from "../utils/apiResponse";
import {
  getDailyIncomeService,
  getYesterdaysIncomeService,
  getWeeklyIncomeService,
  getMonthlyIncomeService,
} from "../services/dashboardService";

export const getDailyIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const dailyIncome = await getDailyIncomeService();
    return successResponse(
      res,
      "Daily income fetched successfully",
      dailyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getYesterdaysIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const yesterdaysIncome = await getYesterdaysIncomeService();
    return successResponse(
      res,
      "Yesterday's income fetched successfully",
      yesterdaysIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getWeeklyIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const weeklyIncome = await getWeeklyIncomeService();
    return successResponse(
      res,
      "Weekly income fetched successfully",
      weeklyIncome
    );
  } catch (error) {
    next(error);
  }
};

export const getMonthlyIncome = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const monthlyIncome = await getMonthlyIncomeService();
    return successResponse(
      res,
      "Monthly income fetched successfully",
      monthlyIncome
    );
  } catch (error) {
    next(error);
  }
};
