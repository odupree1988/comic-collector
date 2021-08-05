const router = require("express").Router();
require("dotenv").config();
const md5 = require("md5");
const crypto = require("crypto");
const axios = require("axios");
const comic_URL = "https://gateway.marvel.com:443/v1/public/comics?";
const char_URL = "https://gateway.marvel.com:443/v1/public/characters?";
const { MARVEL_PRIVATE, MARVEL_PUBLIC } = process.env;
let parsedData = [];
let comicData = [];
let imagesArr = [];
let urlArr = [];
let titleArr = [];
let descArr = [];
let priceArr = [];
router.get("/", (req, res) => {
  const { character } = req.query;
  // console.log(character);
  let ts = crypto.randomBytes(20).toString("hex");
  let hash = md5(`${ts}${MARVEL_PRIVATE}${MARVEL_PUBLIC}`);
  const auth = `ts=${ts}&hash=${hash}&apikey=${MARVEL_PUBLIC}`;
  axios
    .get(`${char_URL}${auth}&nameStartsWith=${character}`)
    .then(({ data }) => {
      // console.log(JSON.stringify(data, null, 2))
      let charId = data.data.results[0].id;
      //   if(charId===null){
      //     //   return res.json("please eneter character name differently or character doesn't exist")
      //   }
      axios
        .get(`${comic_URL}${auth}&characters=${charId}`)
        .then(({ data }) => {
          // console.log(JSON.stringify(data, null, 2));
          res.json(data);
          for (let i = 0; i < data.data.results.length; i++) {
            let imageData = data.data.results[i].images[0].path;
            let s = "s";
            var position = 4;
            imageData = [
              imageData.slice(0, position),
              s,
              imageData.slice(position),
            ].join("");
            imageData = imageData + "/clean.jpg";
            imagesArr.push(imageData);
            let priceData = data.data.results[i].prices[0].price;
            // console.log(data.data.results[i].prices[0].price);
            priceArr.push(priceData);
            let titleData = data.data.results[i].title;
            titleArr.push(titleData);
            // console.log(data.data.results[i].title);
            let descData = data.data.results[i].description;
            descArr.push(descData);
            let urlData = data.data.results[i].urls[0].url;
            urlData = urlData.split("?")[0];
            console.log(urlData);
            // urlArr.push(urlData);
          }
          // comicData.push(imagesArr, titleArr, priceArr, urlArr, descArr);
          // console.log(comicData);
          // console.log(imagesArr);
          // console.log(titleArr);
          // console.log(priceArr);
          // console.log(urlArr);
          // console.log(descArr);
          // console.log(comicData);
          // res.render("homepage", comicData);
          res.json({ message: "success!" });
          return res.json(data);
        })
        .catch((error) => console.log(error));
    })
    .catch((error) => console.log(error));
});
// router.get("./", (req, res) => {
//   // console.log(parsedData)
//   for (let i = 0; i < parsedData.data.results.length; i++) {
//     let imageData = parsedData.data.results[i].images[0].path;
//     let s = "s";
//     var position = 4;
//     imageData = [
//       imageData.slice(0, position),
//       s,
//       imageData.slice(position),
//     ].join("");
//     imageData = imageData + "/clean.jpg";
//     imagesArr.push(imageData);
//     let priceData = parsedData.data.results[i].prices[0].price;
//     // console.log(parsedData.data.results[i].prices[0].price);
//     priceArr.push(priceData);
//     let titleData = parsedData.data.results[i].title;
//     titleArr.push(titleData);
//     // console.log(parsedData.data.results[i].title);
//     let descData = parsedData.data.results[i].description;
//     descArr.push(descData);
//     let urlData = parsedData.data.results[i].urls[0].url;
//     urlData = urlData.split("?")[0];
//     // console.log(urlData);
//     // urlArr.push(urlData);
//   }
//   // comicData.push(imagesArr, titleArr, priceArr, urlArr, descArr);
//   // console.log(imagesArr);
//   // console.log(titleArr);
//   // console.log(priceArr);
//   // console.log(urlArr);
//   // console.log(descArr);
//   // console.log(comicData);
//   // res.render("homepage", comicData);
//   res.json({message: 'success!'})
// });
module.exports = router;
