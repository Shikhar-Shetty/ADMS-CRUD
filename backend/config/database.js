import { Sequelize } from "sequelize";

const db = new Sequelize("agritechnodb", "root", "1904", {
  host: "0.0.0.0",
  dialect: "mysql",
});

export default db;
