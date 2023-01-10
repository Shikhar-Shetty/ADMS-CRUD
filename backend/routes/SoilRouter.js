import express from "express";
import {
  createSoil,
  deleteSoil,
  getAllSoil,
  getSoilById,
  updateSoil,
} from "../controllers/Soil.js";

const SoilRouter = express.Router();

SoilRouter.get("/", getAllSoil);
SoilRouter.get("/:id", getSoilById);
SoilRouter.post("/", createSoil);
SoilRouter.patch("/:id", updateSoil);
SoilRouter.delete("/:id", deleteSoil);

export default SoilRouter;
