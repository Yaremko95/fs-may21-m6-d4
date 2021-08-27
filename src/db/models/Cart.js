import sequelize from "../index.js";
import s from "sequelize";

const { DataTypes } = s;

const Cart = sequelize.define(
  "cart",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    schema: "development",
  }
);

export default Cart;
