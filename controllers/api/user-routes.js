const router = require("express").Router();
const { User, Comic } = require("../../models");

// router
//   .get("/", (req, res) => {
//     User.findAll();
//   })
//   .then((dbComicData) => json(dbComicData))
//   .catch((err) => {
//     console.log(err);
//     res.status(500).json(err);
//   });

module.exports = router;
