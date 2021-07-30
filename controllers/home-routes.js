const router = require("express").Router();
const { User, Comic } = require("../models");
const { route } = require("./api");

router.get("/", (req, res) => {
  res.render("homepage");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard')
})
module.exports = router;
