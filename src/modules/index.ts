import { Router } from "express";
import clientRoutes from "./clients/client.routes"
import authRoutes from "./auth/auth.routes"

const router = Router();

router.use("/auth", authRoutes)
router.use("/clients", clientRoutes);
router.use("/companies", authRoutes)
router.use("/products", authRoutes)
router.use("/service-orders", authRoutes)
router.use("/stocks", authRoutes)
router.use("/suppliers", authRoutes)
router.use("/users", authRoutes)
router.use("/vehicles", authRoutes)

export default router;