const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comic } = require("../models");

router.get("/", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
