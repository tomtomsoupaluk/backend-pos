import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = Router();

router.get("/products", authenticateUser, getAllProducts);
router.get("/products/:id", authenticateUser, getProductById);
router.post("/products", authenticateUser, createProduct);
router.put("/products/:id", authenticateUser, updateProduct);
router.delete("/products/:id", authenticateUser, deleteProduct);

export default router;
