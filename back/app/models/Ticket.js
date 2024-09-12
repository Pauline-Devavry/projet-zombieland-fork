import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Ticket extends Model {}

Ticket.init(
  {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize(),
    tableName: "ticket",
  }
);

