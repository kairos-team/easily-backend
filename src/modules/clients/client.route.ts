import ClientRepository from "./client.repository";
import ClientController from "./client.controller";
import ClientService from "./client.service";
import { prisma } from "@/shared/db/client";
import { Router } from "express";

const clientRepository = new ClientRepository(prisma);
const clientService = new ClientService(clientRepository);
const clientController = new ClientController(clientService);

const router = Router();

router.post("/", (req, res, next) => clientController.create(req, res, next));
router.get("/", (req, res, next) => clientController.findAll(req, res, next));
router.get("/:id", (req, res, next) => clientController.findById(req, res, next));
router.put("/:id", (req, res, next) => clientController.updateById(req, res, next));
router.delete("/:id", (req, res, next) => clientController.deleteById(req, res, next));

export default router;
