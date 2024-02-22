const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: [true, "Username already exists!"],
    min: [5, "Username must be at least of 5 characters"],
    max: [10, "Username must be at most 10 characters"],
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
