import express from "express";
import {
  createCropRequirements,
  deleteCropRequirements,
  getAllCropRequirements,
  getCropRequirementsById,
  updateCropRequirements,
} from "../controllers/CropRequirements.js";

const CropRequirementsRouter = express.Router();

CropRequirementsRouter.get("/", getAllCropRequirements);
CropRequirementsRouter.get("/:id", getCropRequirementsById);
CropRequirementsRouter.post("/", createCropRequirements);
CropRequirementsRouter.patch("/:id", updateCropRequirements);
CropRequirementsRouter.delete("/:id", deleteCropRequirements);

export default CropRequirementsRouter;
