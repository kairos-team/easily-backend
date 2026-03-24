import { Router } from "express";
import clientRoutes from "./clients/client.routes";
import authRoutes from "./auth/auth.routes";
import userRoutes from "./users/user.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/clients", clientRoutes);
router.use("/companies", authRoutes);
router.use("/products", authRoutes);
router.use("/service-orders", authRoutes);
router.use("/stocks", authRoutes);
router.use("/suppliers", authRoutes);
router.use("/users", userRoutes);
router.use("/vehicles", authRoutes);

export default router;
