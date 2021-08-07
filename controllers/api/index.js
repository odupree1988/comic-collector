const router = require("express").Router();
const comicName = require("./comicName-route");
const userRoutes = require("./user-routes.js");
const comicRoutes = require("./comic-routes.js");
const character = require("./characters-route.js");
const randComic = require("./randComic-route.js")

router.use("/users", userRoutes);
router.use("/comics", comicRoutes);
router.use("/characters", character);
router.use("/comicName", comicName);
router.use("/randComic", randComic);


module.exports = router;
