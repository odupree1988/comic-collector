const router = require("express").Router();
require("dotenv").config();
const md5 = require("md5");
const crypto = require("crypto");
const axios = require("axios");
const comic_URL = "https://gateway.marvel.com:443/v1/public/comics?";
const char_URL = "https://gateway.marvel.com:443/v1/public/characters?";
const { MARVEL_PRIVATE, MARVEL_PUBLIC } = process.env;
router.get("/", (req, res) => {
  const { character } = req.query;
console.log(character)
  let ts = crypto.randomBytes(20).toString("hex");
  let hash = md5(`${ts}${MARVEL_PRIVATE}${MARVEL_PUBLIC}`);
  const auth = `ts=${ts}&hash=${hash}&apikey=${MARVEL_PUBLIC}`;

  axios
    .get(`${char_URL}${auth}&nameStartsWith=${character}`)
    .then(({ data }) => {
      console.log(JSON.stringify(data, null, 2))
      let charId = data.data.results[0].id;
    //   if(charId===null){
    //     //   return res.json("please eneter character name differently or character doesn't exist")
    //   }
      axios
        .get(`${comic_URL}${auth}&characters=${charId}`)
        .then(({ data }) => {
          // console.log(JSON.stringify(data, null, 2))

          return res.json(data);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
});

module.exports = router;
