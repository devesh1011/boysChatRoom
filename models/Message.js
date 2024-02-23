const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const msgSchema = new Schema({
  msg: {
    type: String,
    required: true,
    min: [1, "Message should be at least 1 character"],
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Message = mongoose.model("Message", msgSchema);

module.exports = Message;
