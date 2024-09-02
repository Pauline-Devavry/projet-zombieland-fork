import { Sequelize } from "sequelize";

function sequelize() {
  const connexion = new Sequelize(process.env.PG_URL, {
    dialect: "postgres",
    define: {
      underscored: true,
      createdAt: 'created_at',
    updatedAt: 'updated_at',
    },
  });

  return connexion;
}

export { sequelize };

