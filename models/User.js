const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        unique: [true, "Username already exists. Try Login Instead"]
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    googleId: {
        type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;