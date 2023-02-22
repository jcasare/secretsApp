//jshint esversion:6
const express = require("express");
const app = express();
const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
