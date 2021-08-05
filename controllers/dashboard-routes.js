const router = require("express").Router();
const sequelize = require("../config/connection");
const { User, Comic } = require("../models");

router.get("/", (req, res) => {
  Comic.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: ["id", "comic", "title", "description", "price"],
    include: [
      {
        model: User,
        attributes: ["username"],
      },
    ],
  }).then((dbComicData) => {
    if (!dbComicData) {
      res.render("collection", {
        homepage: true,
        search: true,
        loggedIn: true,
      });
    } else {
      const comics = dbComicData.map((comics) => comics.get({ plain: true }));
      console.log(comics);
      res.render("collection", {
        comics,
        homepage: true,
        search: true,
        loggedIn: true,
      });
    }
  });
});

module.exports = router;
