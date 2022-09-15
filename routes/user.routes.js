const express = require("express");
const router = express.Router();

//controllers
const {} = require("../controllers/user.controller");

/* GET users listing. */
router.post("/auth/register", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = { userRouter: router };
