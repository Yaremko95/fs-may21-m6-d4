import { Sequelize } from "sequelize";

const { PGDATABASE, PGUSER, PGPASSWORD, PGHOST } = process.env;

const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: "postgres",
});

const schemas = ["development", "production"]
  .map(
    (schema) => `CREATE SCHEMA  IF NOT EXISTS ${schema} AUTHORIZATION postgres`
  )
  .join(";");
console.log(schemas);

export const syncSequelize = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.query(schemas);
    await sequelize.sync({
      //   force: true,
      logging: false,
      schema: "development",
    });
    console.log("DB authenticated");
  } catch (error) {
    console.log(error);
  }
};

export default sequelize;
