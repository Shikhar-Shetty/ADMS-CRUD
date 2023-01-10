import { Sequelize } from "sequelize";

const db = new Sequelize("agritechnodb", "root", "", {
  host: "0.0.0.0",
  dialect: "mysql",
});

export default db;
