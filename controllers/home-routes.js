const router = require("express").Router();
const { User, Comic } = require("../models");
const { route } = require("./api");

router.get("/", (req, res) => {
  User.findAll().then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      loggedIn: req.session.loggedIn,
    });
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
