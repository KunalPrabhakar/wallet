const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/wallet");
const Userschema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", Userschema);
module.exports = {
  User,
};
