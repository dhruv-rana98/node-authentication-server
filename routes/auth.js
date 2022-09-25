const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authUser = require("../models/authModel");
router.post("/login", (req, res) => {});

router.post("/register", async (req, res) => {
  let registerData = await {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };
  const salt = await bcrypt.genSalt(10);
  await bcrypt.hash(req.body.password, salt).then((hashedPassword) => {
    if (hashedPassword) {
      console.log("hashed Password", hashedPassword);
      registerData.password = hashedPassword;
    }
  });

  await authUser
    .create({
      username: "dhruvrana0000",
      email: "dhruvrana0000@gmail.com",
      password: "Dhruvrana@123",
    })
    .then((userStoredData) => {
      if (userStoredData && userStoredData._id) {
        console.log("User Stored Data", userStoredData);
        res.json({ status: "ok", data: userStoredData });
      }
    })
    .catch((err) => {
      if (err) {
        res.json({ status: "error", data: err });
      }
    });
});

module.exports = router;
