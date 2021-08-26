import Product from "./product.js";
import Category from "./category.js";

Category.hasMany(Product, { onDelete: "cascade" });
Product.belongsTo(Category, { onDelete: "cascade" });

export default { Product, Category };
