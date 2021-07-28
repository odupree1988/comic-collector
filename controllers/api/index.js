const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const comicRoutes = require("./comic-routes.js");

router.use("/users", userRoutes);
router.use("/comics", comicRoutes);

module.exports = router;
