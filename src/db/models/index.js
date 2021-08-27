import Product from "./Product.js";
import Category from "./Category.js";
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

//Product.findAll({include:User})
Product.belongsToMany(User, { through: { model: Cart, unique: false } }); //unique: false => to prevnt creating primary key

//User.findAll({include:Product})
User.belongsToMany(Product, { through: { model: Cart, unique: false } }); //unique: false => to prevnt creating primary key

Product.hasMany(Cart); // Product.findAll({include: Cart})
Cart.belongsTo(Product); // Cart.findAll({include: Product})

User.hasMany(Cart); // User.findAll({include: Cart})
Cart.belongsTo(User); // Cart.findAll({include: User})

export default { Product, Category, Cart, User };
