import express from "express";
import {
  createInsurancesTaken,
  deleteInsurancesTaken,
  getAllInsurancesTaken,
  getInsurancesTakenById,
  updateInsurancesTaken,
} from "../controllers/InsurancesTaken.js";

const InsurancesTakenRouter = express.Router();

InsurancesTakenRouter.get("/", getAllInsurancesTaken);
InsurancesTakenRouter.get("/:id", getInsurancesTakenById);
InsurancesTakenRouter.post("/", createInsurancesTaken);
InsurancesTakenRouter.patch("/:id", updateInsurancesTaken);
InsurancesTakenRouter.delete("/:id", deleteInsurancesTaken);

export default InsurancesTakenRouter;
