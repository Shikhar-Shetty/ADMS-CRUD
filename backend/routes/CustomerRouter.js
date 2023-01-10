import express from "express";
import {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
} from "../controllers/Customer.js";

const CustomerRouter = express.Router();

CustomerRouter.get("/", getAllCustomers);
CustomerRouter.get("/:id", getCustomerById);
CustomerRouter.post("/", createCustomer);
CustomerRouter.patch("/:id", updateCustomer);
CustomerRouter.delete("/:id", deleteCustomer);

export default CustomerRouter;
