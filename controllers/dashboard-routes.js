const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comic } = require("../models");

router.get("/collection", (req, res) => {
  res.render("collection", { search: true });
});

router.get("/wishlist", (req, res) => {
  res.render("wishlist", { search: true });
});

module.exports = router;
