const express = require("express");

const router = express.Router();
const zod = require("zod");
const { User } = require("../db");
const signupBody = zod.object({
  username: zod.string(),
  firstName: zod.string(),
  lastName: zod.string(),
  password: zod.string(),
});

router.post("/signup", async (req, res) => {
  const { success } = signupBody.safeParse(req.body);
  // console.log(success, "lastName");
  if (!success) {
    return res.status(411).json({ message: "Not valid" });
  }
  const user = await User.create({
    username: req.body.username,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });
  const userId = user._id;
  res.json({
    message: "Successfully registered",
  });
});
module.exports = router;
