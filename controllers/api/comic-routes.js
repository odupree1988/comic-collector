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
    super_hero: req.body.super_hero,
    book_name: req.body.book_name,
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
      res.json(dbComicData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
