const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");

Product.belongsTo(Category, {
  as: "category",
  foreignKey: "category_id",
});

Category.hasMany(Product, {
  as: "product",
  foreignKey: "category_id",
});

module.exports = { Product, Category, User };
