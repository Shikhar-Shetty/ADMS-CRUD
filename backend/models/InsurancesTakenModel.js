import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const InsurancesTaken = db.define(
  "InsurancesTaken",
  {
    customerId: {
      type: DataTypes.INTEGER,
    },
    insuranceId: {
      type: DataTypes.INTEGER,
    },
    termTaken: {
      type: DataTypes.INTEGER,
    },
    pricePerMonth: {
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
  }
);
export default InsurancesTaken;
