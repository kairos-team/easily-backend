import AuthController from "./auth.controller";
import AuthService from "./auth.service";
import AuthRepository from "./auth.repository";
import { prisma } from "@/shared/db/prisma";
import { Router } from "express";

const authRepository = new AuthRepository(prisma);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

const router = Router();

router.post("/register", (req, res, next) => authController.register(req, res, next));
router.post("/login", (req, res, next) => authController.login(req, res, next));
router.post("/refresh", (req, res, next) => authController.refresh(req, res, next));

export default router;
