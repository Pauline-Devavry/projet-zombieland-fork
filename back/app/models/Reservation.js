import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Reservation extends Model {}

Reservation.init(
  {
    date_visit: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    status: {
      type: DataTypes.STRING(20), 
      allowNull: false,
      validate: {
        isIn: [['confirmée', 'annulée']], 
      },
    },

    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false, 
    },

    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user', 
        key: 'id', 
      },
    },
  },

  {
    sequelize: sequelize(),
    tableName: "reservation",
  }
);
