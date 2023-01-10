import db from "./config/database.js";
import cors from "cors";
import CustomerRouter from "./routes/CustomerRouter.js";
import InsuranceRouter from "./routes/InsuranceRouter.js";
import InsurancesTakenRouter from "./routes/InsurancesTakenRouter.js";
import InsuranceCompanyRouter from "./routes/InsuranceCompanyRouter.js";
import InsurancesProvidedRouter from "./routes/InsurancesProvidedRouter.js";
import express from "express";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/customer", CustomerRouter);
app.use("/insurance", InsuranceRouter);
app.use("/taken", InsurancesTakenRouter);
app.use("/provided", InsurancesProvidedRouter);
app.use("/company", InsuranceCompanyRouter);

app.listen(5000, () => console.log("Server running at port 5000"));
