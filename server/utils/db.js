const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("myntra", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .sync()
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("DB connection failed", error);
  });

module.exports = sequelize;
