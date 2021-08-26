import sequlize from "./index.js";
import s from "sequelize";
const { DataTypes } = s;

const userProduct = sequlize.define("userProduct", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default userProduct;
