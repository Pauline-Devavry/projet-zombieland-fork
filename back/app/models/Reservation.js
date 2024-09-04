import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Reservation extends Model {}

Reservation.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
    },

    visit_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        isIn: [[confirmée, annulée]],
      },
    },
  },
  {
    sequelize: sequelize(),
    tableName: "reservation",
  }
);
