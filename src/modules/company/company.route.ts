import CompanyRepository from "./company.repository";
import CompanyController from "./company.controller";
import CompanyService from "./company.service";
import { prisma } from "@/shared/db/client";
import { Router } from "express";

const companyRepository = new CompanyRepository(prisma);
const companyService = new CompanyService(companyRepository);
const companyController = new CompanyController(companyService);

const router = Router();

router.post("/", (req, res, next) => companyController.create(req, res, next));
router.get("/", (req, res, next) => companyController.findAll(req, res, next));
router.get("/:id", (req, res, next) =>
  companyController.findById(req, res, next),
);
router.put("/:id", (req, res, next) =>
  companyController.updateById(req, res, next),
);
router.delete("/:id", (req, res, next) =>
  companyController.deleteById(req, res, next),
);

export default router;
