import VehicleRepository from "./vehicle.repository";
import VehicleController from "./vehicle.controller";
import VehicleService from "./vehicle.service";
import { Router } from "express";
import { prisma } from "@/shared/db/prisma";

const vehicleRepository = new VehicleRepository(prisma);
const vehicleService = new VehicleService(vehicleRepository);
const vehicleController = new VehicleController(vehicleService);

const router = Router();

router.post("/", (req, res, next) => vehicleController.create(req, res, next));
router.get("/", (req, res, next) => vehicleController.findAll(req, res, next));
router.get("/:id", (req, res, next) =>
  vehicleController.findById(req, res, next),
);
router.put("/:id", (req, res, next) =>
  vehicleController.updateById(req, res, next),
);
router.delete("/:id", (req, res, next) =>
  vehicleController.deleteById(req, res, next),
);

export default router;
