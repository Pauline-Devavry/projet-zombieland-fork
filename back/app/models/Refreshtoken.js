import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database/client.js";

class Refreshtoken extends Model {}

Refreshtoken.init(
    {
        token: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                len: [20, 500]
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        expiryDate: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, 
    {
        sequelize: sequelize(),
        tableName: "refreshtoken"
    }
)

export { Refreshtoken }