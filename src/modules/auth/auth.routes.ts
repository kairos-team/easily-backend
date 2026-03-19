import AuthController from "./auth.controller";
import AuthService from "./auth.service";
import { Router } from "express";

const authService = new AuthService()
const authController = new AuthController(authService)

const router = Router();

router.post("/register", (req, res, next) => authController.register(req, res, next));
router.post("/login", (req, res, next) => authController.login(req, res, next));
router.post("/refresh", (req, res, next) => authController.login(req, res, next));

export default router