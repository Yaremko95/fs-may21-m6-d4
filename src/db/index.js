import Product from "./models/product.js";
import User from "./models/user.js";
import Category from "./models/category.js";
import userProduct from "./models/userProduct.js";
import sequlize from "./models/index.js";

Category.hasMany(Product, { foreignKey: "category_id", as: "products" });
Product.belongsTo(Category, { foreignKey: "category_id", as: "category" });

Product.belongsToMany(User, { through: { model: userProduct, unique: false } });
User.belongsToMany(Product, { through: { model: userProduct, unique: false } });

User.hasMany(userProduct);
userProduct.belongsTo(User);

Product.hasMany(userProduct);
userProduct.belongsTo(Product);

export { Product, sequlize, User, Category, userProduct };
