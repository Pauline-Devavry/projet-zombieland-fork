import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class ReservationHasTicket extends Model {}

ReservationHasTicket.init({
    reservation_id: {
        type: DataTypes.INTEGER,
      },

      ticket_id: {
        type: DataTypes.INTEGER,
      },

      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      },
    {
      sequelize : sequelize(),
      tableName: "reservation_ticket"
    });