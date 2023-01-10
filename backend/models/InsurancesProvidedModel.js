import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const InsurancesProvided = db.define(
  "InsurancesProvided",
  {
    companyId: {
      type: DataTypes.INTEGER,
    },
    insuranceId: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
export default InsurancesProvided;
