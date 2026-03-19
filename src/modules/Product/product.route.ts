import ProductRepository from "./product.repository";
import ProductController from "./product.controller";
import ProductService from "./product.service";
import { prisma } from "@/shared/db/client";
import { Router } from "express";

const productRepository = new ProductRepository(prisma);
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

const router = Router();

router.post("/", (req, res, next) => productController.create(req, res, next));
router.get("/", (req, res, next) => productController.findAll(req, res, next));
router.get("/:id", (req, res, next) =>
  productController.findById(req, res, next),
);
router.put("/:id", (req, res, next) =>
  productController.updateById(req, res, next),
);
router.delete("/:id", (req, res, next) =>
  productController.deleteById(req, res, next),
);

export default router;
