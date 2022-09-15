const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const Actors = db.define(
  "actors",
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
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    history: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = { Actors };
