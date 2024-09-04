import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class User extends Model {}

User.init(
  {
    last_name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(320),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING(20),
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


