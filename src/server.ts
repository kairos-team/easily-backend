import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import routes from "./routes";
import dbConnection from "./db/client";
import { errorMiddleware } from "./shared/middlewares/errorMiddleware";

const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors());
app.use(express.json());

app.use(routes);

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