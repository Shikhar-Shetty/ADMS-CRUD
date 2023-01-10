import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Temperature = db.define(
  "Temperature",
  {
    startTemperature: {
      type: DataTypes.STRING,
    },
    endTemperature: {
      type: DataTypes.STRING,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Temperature;
