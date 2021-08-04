const router = require("express").Router();
require("dotenv").config();
const md5 = require("md5");
const crypto = require("crypto");
const axios = require("axios");
const comic_URL = "https://gateway.marvel.com:443/v1/public/comics?";
const { MARVEL_PRIVATE, MARVEL_PUBLIC } = process.env;
router.get("/", (req, res) => {
  const { comic } = req.query;
console.log(comic)
  let ts = crypto.randomBytes(20).toString("hex");
  let hash = md5(`${ts}${MARVEL_PRIVATE}${MARVEL_PUBLIC}`);
  const auth = `ts=${ts}&hash=${hash}&apikey=${MARVEL_PUBLIC}`;

  axios
  .get(`${comic_URL}${auth}&titleStartsWith=${comic}`)
  .then(({ data }) => {
    console.log(JSON.stringify(data, null, 2))

    return res.json(data);
  })
  .catch((error) => console.log(error));
})

module.exports = router
