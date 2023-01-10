import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const InsuranceCompany = db.define(
  "InsuranceCompany",
  {
    name: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    mobileNo: {
      type: DataTypes.STRING,
    },
    emailAddress: {
      type: DataTypes.STRING,
    },
    netWorth: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
export default InsuranceCompany;
