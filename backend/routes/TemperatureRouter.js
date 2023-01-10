import express from "express";
import {
  createTemperature,
  deleteTemperature,
  getAllTemperatures,
  getTemperatureById,
  updateTemperature,
} from "../controllers/Temperature.js";

const TemperatureRouter = express.Router();

TemperatureRouter.get("/", getAllTemperatures);
TemperatureRouter.get("/:id", getTemperatureById);
TemperatureRouter.post("/", createTemperature);
TemperatureRouter.patch("/:id", updateTemperature);
TemperatureRouter.delete("/:id", deleteTemperature);

export default TemperatureRouter;
