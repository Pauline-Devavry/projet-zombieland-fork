import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/client.js";

export class Message extends Model {}

Message.init({
    user_id: {
        type: DataTypes.INTEGER,
      },

      last_name: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },

      first_name: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      
      content: {
        type:DataTypes.STRING(500),
        allowNull:false,
      },

      sent_date: {
        type:DataTypes.DATE, 
      },
    }, 
    {
      sequelize : sequelize(),
      tableName: "message"
    });