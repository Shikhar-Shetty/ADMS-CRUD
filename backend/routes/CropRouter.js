import express from "express";
import {
  createCrop,
  deleteCrop,
  getAllCrop,
  getCropById,
  updateCrop,
} from "../controllers/Crop.js";

const CropRouter = express.Router();

CropRouter.get("/", getAllCrop);
CropRouter.get("/:id", getCropById);
CropRouter.post("/", createCrop);
CropRouter.patch("/:id", updateCrop);
CropRouter.delete("/:id", deleteCrop);

export default CropRouter;
