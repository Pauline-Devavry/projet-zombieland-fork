import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },

  description: {
    type: DataTypes.TEXT,
  }
}, {
  sequelize,
  tableName: "category"
});