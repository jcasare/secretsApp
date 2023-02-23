//jshint esversion:6
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;
const ejs = require("ejs");
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
