import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Message extends Model {}

Message.init(
  {
    name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },

    first_name: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },

    email: {
      type: DataTypes.STRIN(320),
      unique: true,
      allowNull: false,
    },

    content: {
      type: DataTypes.STRING(500),
      allowNull: false,
    },
  },
  {
    sequelize: sequelize(),
    tableName: "message",
  }
);
