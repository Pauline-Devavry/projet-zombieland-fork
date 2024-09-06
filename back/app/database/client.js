import { Sequelize } from "sequelize";
import "dotenv/config";

function sequelize() {
  const connexion = new Sequelize(process.env.PG_URL, {
    dialect: "postgres",
    define: {
      underscored: true,
      timestamps: false,
    },
  });

  return connexion;
}

export { sequelize };
