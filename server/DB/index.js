const dotenv = require("dotenv");
dotenv.config();
const dbConnection = process.env.dbConnection;
// const dbConnection_test = process.env.dbConnection_test;

const mongoose = require("mongoose");
const chalk = require("chalk");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
};

mongoose
  .connect(dbConnection, options)
  .then(() => {
    console.log(chalk.green("mongoDB connected"));
  })
  .catch((err) => {
    console.log(chalk.red("Connection error", err.message));
  });

const db = mongoose.connection;
module.exports = db;
