const router = require("express").Router();
const { User, Comic } = require("../models");

router.get("/", (req, res) => {
  res.render("homepage");
});

module.exports = router;
