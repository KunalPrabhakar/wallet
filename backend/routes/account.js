const express = require("express");
const { Account } = require("../db");
const router = express.Router();
router.get("/balance", async (req, res) => {
  const account = await Account.findOne({
    userId: req.body.userId,
  });
  res.json({ balance: account.balance });
});

router.post("/transfer", async (req, res) => {
  const { amount, to } = req.body;
  const account = await Account.findOne({
    userId: req.body.userId,
  });
  if (!account || account.balance < amount) {
    res.status(400).json({ message: "Not sufficient balance" });
  }
  const toaccount = await Account.findOne({
    userId: to,
  });
  if (!toaccount) {
    res.status(400).json({ message: "Not valid account" });
  }
  await Account.updateOne(
    { userId: req.body.userId },
    { $inc: { balance: -amount } }
  );

  await Account.updateOne({ userId: to }, { $inc: { balance: amount } });
  res.json({
    message: "Transfer Succesfull",
  });
});
module.exports = router;
