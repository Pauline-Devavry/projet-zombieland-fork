import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

class User extends Model {}

User.init(
  {
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [["utilisateur", "administrateur"]],
      },
    },
  },
  {
    sequelize: sequelize(),
    tableName: "user",
  }
);

