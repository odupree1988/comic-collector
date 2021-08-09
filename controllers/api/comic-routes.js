const router = require("express").Router();
const { User, Comic } = require("../../models");

router.get("/", (req, res) => {
  Comic.findAll()
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Comic.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbComicData) => {
      if (!dbComicData) {
        res.status(404).json({ message: "No comic exists with this id!" });
        return;
      }
      res.json(dbComicData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Comic.create({
    comic: req.body.comic,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    comic_url: req.body.comic_url,
    user_id: req.session.user_id,
  })
    .then((dbComicData) => res.json(dbComicData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  Comic.update(
    {
      super_hero: req.body.super_hero,
      book_name: req.body.book_name,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then((dbComicData) => {
      if (!dbComicData) {
        res.status(404).json({ message: "No comic exists with this id!" });
        return;
      }
      res.json(dbComicData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Comic.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbComicData) => {
      if (!dbComicData) {
        res.status(404).json({ message: "No comic exists with this id!" });
        return;
      }
      const selectedComic = dbComicData.map((post) =>
        post.get({ plain: true })
      );
      res.render("collection");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/generateCards", (req, res) => {
  // hbs
  //   .render("views/homepage.handlebars", req.body)
  //   .then((html) => {
  //     res.send(html);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });

  //   if (req.session.loggedIn) {
  //     res.render("homepage", req.body, {
  //       loggedIn: true,
  //     });
  //   } else {
  res.render("homepage", {
    data: req.body,
    loggedIn: req.session.loggedIn,
  });
  //   }
});

module.exports = router;
