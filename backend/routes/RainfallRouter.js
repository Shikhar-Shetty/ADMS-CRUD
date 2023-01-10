import express from "express";
import {
  createRainfall,
  deleteRainfall,
  getAllRainfalls,
  getRainfallById,
  updateRainfall,
} from "../controllers/Rainfall.js";

const RainfallRouter = express.Router();

RainfallRouter.get("/", getAllRainfalls);
RainfallRouter.get("/:id", getRainfallById);
RainfallRouter.post("/", createRainfall);
RainfallRouter.patch("/:id", updateRainfall);
RainfallRouter.delete("/:id", deleteRainfall);

export default RainfallRouter;
