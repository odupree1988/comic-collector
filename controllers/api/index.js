const router = require("express").Router();
const comicName=require("./comicName-route")
const userRoutes = require("./user-routes.js");
const comicRoutes = require("./comic-routes.js");
const character = require("./characters-route.js");
const comicRoutes = require("./comicName-route.js");

router.use("/users", userRoutes);
router.use("/comics", comicRoutes);
router.use("/characters", character);
router.use("/comicName", comicName);

module.exports = router;
