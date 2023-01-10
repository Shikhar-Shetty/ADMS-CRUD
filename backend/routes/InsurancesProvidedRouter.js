import express from "express";
import {
  createInsurancesProvided,
  deleteInsurancesProvided,
  getAllInsurancesProvided,
  getInsurancesProvidedById,
  updateInsurancesProvided,
} from "../controllers/InsurancesProvided.js";

const InsurancesProvidedRouter = express.Router();

InsurancesProvidedRouter.get("/", getAllInsurancesProvided);
InsurancesProvidedRouter.get("/:id", getInsurancesProvidedById);
InsurancesProvidedRouter.post("/", createInsurancesProvided);
InsurancesProvidedRouter.patch("/:id", updateInsurancesProvided);
InsurancesProvidedRouter.delete("/:id", deleteInsurancesProvided);

export default InsurancesProvidedRouter;
