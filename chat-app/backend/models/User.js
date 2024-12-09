const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: True },
  email: { type: String, required: True, unique: True },
  password: { type: String, required: True },
});

module.exports = mongoose.model("user", userSchema);
