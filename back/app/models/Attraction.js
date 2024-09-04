import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

class Attraction extends Model {}

Attraction.init(
  {
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    description: {

      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize(),
    tableName: "attraction",
  }
);

