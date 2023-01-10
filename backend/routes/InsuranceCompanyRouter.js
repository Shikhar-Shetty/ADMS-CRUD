import express from "express";
import {
  createInsuranceCompany,
  deleteInsuranceCompany,
  getAllInsuranceCompanies,
  getInsuranceCompanyById,
  updateInsuranceCompany,
} from "../controllers/InsuranceCompany.js";

const InsuranceCompanyRouter = express.Router();

InsuranceCompanyRouter.get("/", getAllInsuranceCompanies);
InsuranceCompanyRouter.get("/:id", getInsuranceCompanyById);
InsuranceCompanyRouter.post("/", createInsuranceCompany);
InsuranceCompanyRouter.patch("/:id", updateInsuranceCompany);
InsuranceCompanyRouter.delete("/:id", deleteInsuranceCompany);

export default InsuranceCompanyRouter;
