const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comic } = require("../models");

router.get("/", (req, res) => {
  res.render("wishlist", { search: true });
});

module.exports = router;
