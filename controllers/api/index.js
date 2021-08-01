const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const comicRoutes = require("./comic-routes.js");
const character = require("./characters-route.js")

router.use("/users", userRoutes);
router.use("/comics", comicRoutes);
router.use("/characters",character)

module.exports = router;
