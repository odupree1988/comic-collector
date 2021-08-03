const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comic } = require("../models");

router.get("/collection", (req, res) => {
  res.render("collection");
});

router.get("/wishlist", (req, res) => {
  res.render("wishlist");
});

module.exports = router;
