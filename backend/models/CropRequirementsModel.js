import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const CropRequirements = db.define(
  "CropRequirements",
  {
    cropId: {
      type: DataTypes.INTEGER,
    },
    soilId: {
      type: DataTypes.INTEGER,
    },
    rainfallId: {
      type: DataTypes.INTEGER,
    },
    temperatureId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
export default CropRequirements;
