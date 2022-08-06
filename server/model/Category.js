const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/config");

class Category extends Model {}

Category.init(
  {
    name: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "category",
    timestamps: false,
  }
);

module.exports = Category;
