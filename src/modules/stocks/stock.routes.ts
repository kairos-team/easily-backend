import StockRepository from "./stock.repository";
import StockController from "./stock.controller";
import StockService from "./stock.service";
import { Router } from "express";
import { prisma } from "@/shared/db/prisma";

const stockRepository = new StockRepository(prisma);
const stockService = new StockService(stockRepository);
const stockController = new StockController(stockService);

const router = Router();

router.post("/", (req, res, next) => stockController.create(req, res, next));
router.get("/", (req, res, next) => stockController.findAll(req, res, next));
router.get("/:id", (req, res, next) =>
  stockController.findById(req, res, next),
);
router.put("/:id", (req, res, next) =>
  stockController.updateById(req, res, next),
);
router.delete("/:id", (req, res, next) =>
  stockController.deleteById(req, res, next),
);

export default router;
