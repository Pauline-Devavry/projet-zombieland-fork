import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },

  description: {
    type: DataTypes.STRING,
  }
}, {
  sequelize : sequelize(),
  tableName: "team"
});