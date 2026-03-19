import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import { errorMiddleware } from "./shared/middlewares/error.middleware";
import dbConnection from "./shared/db/prisma";
import router from "./modules";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use(router);

app.use(errorMiddleware);

const startServer = async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`)
    });
  } catch (error) {
    process.exit(1);
  }
};

startServer();