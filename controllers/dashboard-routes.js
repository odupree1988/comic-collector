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
    const comics = dbComicData.map((comics) => comics.get({ plain: true }));
    console.log(comics)
    res.render("collection", {
      comics,
      homepage: true,
      search: true,
      loggedIn: true,
    });
  });
});

module.exports = router;
