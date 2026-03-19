import ServiceOrderRepository from "./service-order.repository";
import ServiceOrderController from "./service-order.controller";
import ServiceOrderService from "./service-order.service";
import { Router } from "express";
import { prisma } from "@/shared/db/prisma";

const serviceOrderRepository = new ServiceOrderRepository(prisma);
const serviceOrderService = new ServiceOrderService(serviceOrderRepository);
const serviceOrderController = new ServiceOrderController(serviceOrderService);

const router = Router();

router.post("/", (req, res, next) =>
  serviceOrderController.create(req, res, next),
);
router.get("/", (req, res, next) =>
  serviceOrderController.findAll(req, res, next),
);
router.get("/:id", (req, res, next) =>
  serviceOrderController.findById(req, res, next),
);
router.put("/:id", (req, res, next) =>
  serviceOrderController.updateById(req, res, next),
);
router.delete("/:id", (req, res, next) =>
  serviceOrderController.deleteById(req, res, next),
);

export default router;
