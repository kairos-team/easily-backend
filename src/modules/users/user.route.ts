import UserRepository from "./user.repository";
import UserController from "./user.controller";
import UserService from "./user.service";
import { prisma } from "@/shared/db/client";
import { Router } from "express";

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const router = Router();

router.post("/", (req, res, next) => userController.create(req, res, next));
router.get("/", (req, res, next) => userController.findAll(req, res, next));
router.get("/:id", (req, res, next) => userController.findById(req, res, next));
router.put("/:id", (req, res, next) =>
  userController.updateById(req, res, next),
);
router.delete("/:id", (req, res, next) =>
  userController.deleteById(req, res, next),
);

export default router;
