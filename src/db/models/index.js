import s from "sequelize";
const { Sequelize } = s;

const { PGDATABASE, PGUSERNAME, PGPASSWORD, PGHOST, PGPORT } = process.env;

const sequlize = new Sequelize(PGDATABASE, PGUSERNAME, PGPASSWORD, {
  host: PGHOST,
  port: PGPORT,
  dialect: "postgres",
});

sequlize
  .authenticate()
  .then(() => {
    console.log("connection established");
  })
  .catch((e) => console.log(e));

export default sequlize;
