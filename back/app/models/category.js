import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Category extends Model {}

Category.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true
  },

  description: {
    type: DataTypes.TEXT,
  }
}, {
  sequelize,
  tableName: "team"
});