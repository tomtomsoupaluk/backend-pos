import { Router } from "express";
import { authenticateUser } from "../middlewares/authMiddleware";
import {
  getAllSales,
  getSaleById,
  createSale,
  updateSale,
  deleteSale,
} from "../controllers/saleController";

const router = Router();

router.get("/sales", authenticateUser, getAllSales);
router.get("/sales/:id", authenticateUser, getSaleById);
router.post("/sales", authenticateUser, createSale);
router.put("/sales/:id", authenticateUser, updateSale);
router.delete("/sales/:id", authenticateUser, deleteSale);

export default router;
