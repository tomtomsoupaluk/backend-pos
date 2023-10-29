import { Router } from "express";
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController";
import { authenticateUser } from "../middlewares/authMiddleware";

const router = Router();

router.get("/users", authenticateUser, getAllUsers);
router.get("/users/:id", authenticateUser, getUserById);
router.post("/users", authenticateUser, createUser);
router.put("/users/:id", authenticateUser, updateUser);
router.delete("/users/:id", authenticateUser, deleteUser);

export default router;
