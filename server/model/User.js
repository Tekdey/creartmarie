const { DataTypes, Model } = require("sequelize");
const sequelize = require("../database/config");

class User extends Model {}

User.init(
  {
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "User",
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    country: {
      type: DataTypes.STRING,
      defaultValue: "France",
    },
    city: {
      type: DataTypes.STRING,
    },
    street: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: "user",
  }
);

module.exports = User;
