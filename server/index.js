// All imports
const express = require("express");
const connection = require("./config/db.js");

//Dotenv configuration
require("dotenv").config();

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hi Krishu!</h1>");
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("connection established with mongoDB");
    console.log(`server is running on port ${process.env.PORT}`);
  } catch (error) {
    console.log("connection error while connecting to mongoDB: " + error);
  }
});
