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
const signinBody = zod.object({
  username: zod.string(),
  password: zod.string(),
});
const updateBody = zod.object({
  password: zod.string().optional(),
  firstName: zod.string().optional(),
  lastName: zod.string().optional(),
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

router.post("/signin", async (req, res) => {
  const { success } = signinBody.safeParse(req.body);
  if (!success) {
    res.status(411).json({ message: "Not valid" });
  }
  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });
  const userId = user._id;

  if (user) {
    res.json({ message: "Sign In Successfully" });
  }
});

module.exports = router;
