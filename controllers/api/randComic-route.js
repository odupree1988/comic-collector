const router = require("express").Router();
require("dotenv").config();
const md5 = require("md5");
const crypto = require("crypto");
const axios = require("axios");
const { MARVEL_PRIVATE, MARVEL_PUBLIC } = process.env;
router.get("/", (req, res) => {
    fetchComic(res)
})

function fetchComic(res){
    let ts = crypto.randomBytes(20).toString("hex");
    let hash = md5(`${ts}${MARVEL_PRIVATE}${MARVEL_PUBLIC}`);
    const auth = `ts=${ts}&hash=${hash}&apikey=${MARVEL_PUBLIC}`;
let comicId = Math.floor(Math.random()*90000) + 10000;
console.log(comicId)
const comic_URL = `https://gateway.marvel.com:443/v1/public/comics/${comicId}?`;
axios
    .get(`${comic_URL}${auth}`)
    .then(({ data }) => {
        // console.log(JSON.stringify(data, null, 2))
        if(data ===false||null||""){
            console.log("failed")
            fetchComic()
        }else{
            console.log("success")
            console.log(data)
            return res.json(data);
        }
    })
    .catch((error) => console.log(error));
}

module.exports = router