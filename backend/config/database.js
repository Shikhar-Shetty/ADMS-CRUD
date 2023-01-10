import { Sequelize } from "sequelize";

const db = new Sequelize("insurancedb", "root", "", {
  host: "0.0.0.0",
  dialect: "mysql",
});

export default db;
