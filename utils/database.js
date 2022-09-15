const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

const db = new Sequelize(
  "MovieAPI",
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    dialectOptions:
      process.env.NODE_ENV === "prod"
        ? {
            ssl: {
              require: true,
              rejectUnauthorized: false,
            },
          }
        : {},
  }
);

module.exports = { db };
