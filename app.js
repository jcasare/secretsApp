//jshint esversion:6
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const mongoose = require("mongoose");
const ejs = require("ejs");
app.use(express.static("public"));
require("dotenv").config();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const connectDB = require("./db/connect");
const encrypt = require("mongoose-encryption");
app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});

const spinServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

spinServer();
