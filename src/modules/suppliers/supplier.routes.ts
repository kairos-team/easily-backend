import SupplierRepository from "./supplier.repository";
import SupplierController from "./supplier.controller";
import SupplierService from "./supplier.service";
import { Router } from "express";
import { prisma } from "@/shared/db/prisma";

const supplierRepository = new SupplierRepository(prisma);
const supplierService = new SupplierService(supplierRepository);
const supplierController = new SupplierController(supplierService);

const router = Router();

router.post("/", (req, res, next) => supplierController.create(req, res, next));
router.get("/", (req, res, next) => supplierController.findAll(req, res, next));
router.get("/:id", (req, res, next) =>
  supplierController.findById(req, res, next),
);
router.put("/:id", (req, res, next) =>
  supplierController.updateById(req, res, next),
);
router.delete("/:id", (req, res, next) =>
  supplierController.deleteById(req, res, next),
);

export default router;
