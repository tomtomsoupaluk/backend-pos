import { Router } from "express";
import { login } from "../controllers/authController";

const router = Router();

router.post("/login", login);
// router.post("/validate", )

export default router;
