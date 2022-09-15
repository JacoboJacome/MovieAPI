const { DataTypes } = require("sequelize");
const { db } = require("../utils/database");

const ActorImg = db.define(
  "actorImg",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    actorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgPath: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: "false",
      // active | deleted | unavailable
      defaultValue: "active",
    },
  },
  { timestamps: false }
);

module.exports = { ActorImg };
