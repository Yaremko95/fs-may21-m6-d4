import sequlize from "./index.js";
import s from "sequelize";
const { DataTypes } = s;

const Category = sequlize.define("productCategory", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },
});

export default Category;
