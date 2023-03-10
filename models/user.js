const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const encrypt = require("mongoose-encryption");
const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "password must be provided"],
      minLenghth: [6, "password cannot be less than 6 characters"],
    },
  },
  { timestamps: true }
);
UserSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.comparePassword = async function (inputPassword) {
  const isMatch = await bcrypt.compare(inputPassword, this.password);
  return isMatch;
};

UserSchema.plugin(encrypt, { secret: process.env.ENCRYPTION_SECRET });
module.exports = mongoose.model("User", UserSchema);
