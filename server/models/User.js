const sequelize = require("./../utils/db");
const { Sequelize, DataTypes } = require("sequelize");

const User = sequelize.define("User", {
  email: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});
module.exports = User;
