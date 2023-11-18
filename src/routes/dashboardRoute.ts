import { Router } from "express";
import { authenticateUser } from "../middlewares/authMiddleware";
import {
  getDailyIncome,
  getYesterdaysIncome,
  getWeeklyIncome,
  getMonthlyIncome,
} from "../controllers/dashboardController";

const router = Router();

router.get("/dashboard/daily-income", authenticateUser, getDailyIncome);
router.get(
  "/dashboard/yesterday-income",
  authenticateUser,
  getYesterdaysIncome
);
router.get("/dashboard/weekly-income", authenticateUser, getWeeklyIncome);
router.get("/dashboard/monthly-income", authenticateUser, getMonthlyIncome);

export default router;
