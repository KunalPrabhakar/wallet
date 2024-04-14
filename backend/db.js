const mongoose = require("mongoose");
const { object, number } = require("zod");
mongoose.connect("mongodb://localhost:27017/wallet");
const Userschema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
});
const Accountschema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  balance: { type: Number, required: true },
});
const Account = mongoose.model("Account", Accountschema);
const User = mongoose.model("User", Userschema);
module.exports = {
  User,
  Account,
};
