import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Insurance = db.define(
  "Insurance",
  {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    insuranceType: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default Insurance;
