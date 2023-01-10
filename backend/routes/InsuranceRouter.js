import express from "express";
import {
  createInsurance,
  deleteInsurance,
  getAllInsurances,
  getInsuranceById,
  updateInsurance,
} from "../controllers/Insurance.js";

const InsuranceRouter = express.Router();

InsuranceRouter.get("/", getAllInsurances);
InsuranceRouter.get("/:id", getInsuranceById);
InsuranceRouter.post("/", createInsurance);
InsuranceRouter.patch("/:id", updateInsurance);
InsuranceRouter.delete("/:id", deleteInsurance);

export default InsuranceRouter;
