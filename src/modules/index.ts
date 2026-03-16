import { Router } from "express";
import clientRoutes from "./clients/client.route"

const router = Router();

router.use("/clients", clientRoutes);

export default router;