const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("./../utils/db");

const User = require("./../models/User");

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  imageUrl1: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl2: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl3: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl4: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imageUrl5: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  originalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  currentPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ratingStar: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: false,
    validate: {
      min: 0,
      max: 5,
    },
  },
  ratingCount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: false,
  },
  specialMessage: {
    type: DataTypes.STRING(100),
  },
});
User.hasMany(Product);
Product.belongsTo(User);

module.exports = Product;
