const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Genres = db.define(
  "genres",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);

module.exports = { Genres };
