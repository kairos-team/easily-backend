import { Router } from "express";
import clientRoutes from "./clients/client.routes";
import authRoutes from "./auth/auth.routes";
import userRoutes from "./users/user.routes";
import companyRoutes from "./companies/company.routes";
import productRoutes from "./products/product.routes";
import serviceOrderRoutes from "./service-orders/service-order.routes";
import stocksRoutes from "./stocks/stock.routes";
import suppliersRoutes from "./suppliers/supplier.routes";
import vehiclesRoutes from "./vehicles/vehicle.routes";

const router = Router();

router.use("/auth", authRoutes);
router.use("/clients", clientRoutes);
router.use("/companies", companyRoutes);
router.use("/products", productRoutes);
router.use("/service-orders", serviceOrderRoutes);
router.use("/stocks", stocksRoutes);
router.use("/suppliers", suppliersRoutes);
router.use("/users", userRoutes);
router.use("/vehicles", vehiclesRoutes);

export default router;
