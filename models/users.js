const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /[\w]+?@[\w]+?\.[a-z]{2,4}/,
      "The value of {PATH} ({VALUE}) is not a valid email address.",
    ],
  },
  address: {
    type: String,
    required: true,
  },
  education: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
