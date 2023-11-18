import { Router } from "express";
import { authenticateUser } from "../middlewares/authMiddleware";
import {
  getDailySaleReportController,
  getMonthlySaleReportController,
  getWeeklySaleReportController,
  getYesterdaySaleReportController,
} from "../controllers/reportController";

const router = Router();

router.get(
  "/report/daily-sale",
  authenticateUser,
  getDailySaleReportController
);
router.get(
  "/report/yesterday-sale",
  authenticateUser,
  getYesterdaySaleReportController
);
router.get(
  "/report/weekly-sale",
  authenticateUser,
  getWeeklySaleReportController
);
router.get(
  "/report/monthly-sale",
  authenticateUser,
  getMonthlySaleReportController
);

export default router;
