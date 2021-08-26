import sequlize from "./index.js";
import s from "sequelize";
const { DataTypes } = s;

const User = sequlize.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  surname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

export default User;
