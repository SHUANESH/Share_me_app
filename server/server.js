const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;
const chalk = require("chalk");
const path = require("path");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import route
const routeLoginRegister = require("./route/loginRouting");

//DB connection
const db = require("./DB");
db.on("error", () => {
  console.log(chalk.red("Connection error"));
});

// use route
app.use("/api", routeLoginRegister);


app.listen(PORT, () => {
  console.log(
    `${chalk.green("Share_me_app")} ${chalk.yellow(
      "live and up on port"
    )} ${chalk.blue(PORT)}`
  );
});

