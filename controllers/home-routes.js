const router = require("express").Router();
const { User, Comic } = require("../models");
const { route } = require("./api");

router.get("/", (req, res) => {
  User.findAll().then((dbPostData) => {
    const posts = dbPostData.map((post) => post.get({ plain: true }));
    res.render("homepage", {
      posts,
      homepage: false,
      loggedIn: req.session.loggedIn,
    });
  });
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    homepage: true, 
    search: true,
    loggedIn: req.session.loggedIn,
  });
});

router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login", { 
    homepage: true, 
    search: true 
  });
});

module.exports = router;
