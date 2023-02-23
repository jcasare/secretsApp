const mongoose = require("mongoose");
const connectDB = (uri) => {
  return mongoose.connect(uri, {
    autoIndex: false,
  });
};

module.exports = connectDB;
