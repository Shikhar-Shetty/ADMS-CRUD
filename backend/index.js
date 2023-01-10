import db from "./config/database.js";
import cors from "cors";
import express from "express";
import TemperatureRouter from "./routes/TemperatureRouter.js";
import SoilRouter from "./routes/SoilRouter.js";
import RainfallRouter from "./routes/RainfallRouter.js";
import CropRouter from "./routes/CropRouter.js";
import CropRequirementsRouter from "./routes/CropRequirementsRouter.js";

const app = express();

try {
  await db.authenticate();
  console.log("Database connected...");
} catch (error) {
  console.error("Connection error:", error);
}

app.use(cors());
app.use(express.json());
app.use("/temperature", TemperatureRouter);
app.use("/soil", SoilRouter);
app.use("/rainfall", RainfallRouter);
app.use("/crop", CropRouter);
app.use("/croprequirements", CropRequirementsRouter);

app.listen(5000, () => console.log("Server running at port 5000"));
