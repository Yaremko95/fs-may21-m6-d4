import Product from "./product.js";
import Category from "./category.js";
import Cart from "./Cart.js";
import User from "./User.js";

Category.hasMany(Product, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});
Product.belongsTo(Category, {
  onDelete: "cascade",
  foreignKey: { allowNull: false },
});

Product.belongsToMany(User, { through: Cart });
User.belongsToMany(Product, { through: Cart });

export default { Product, Category, Cart, User };
