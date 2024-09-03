import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

class Ticket extends Model {}

Ticket.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: sequelize(),
    tableName: "ticket",
  }
);

export { Ticket };
