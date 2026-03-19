import { Router } from "express";
import clientRoutes from "./clients/client.routes"
import authRoutes from "./auth/auth.routes"

const router = Router();

router.use("/clients", clientRoutes);
router.use("/auth", authRoutes)

export default router;