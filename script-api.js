var md5 = require("md5");
const comic_URL = "https://gateway.marvel.com:443/v1/public/comics?";
const apiKey = "apikey=3a29e41bae5c837ab95a10f9604840ff";
const char_URL = "https://gateway.marvel.com:443/v1/public/characters?";

function fetchCharacter(charName) {
  var queryParams = new URLSearchParams({
    appid: apiKey,
    name: "spider-man",
    hash: md5,
    ts: str(time.time()),
  });
  fetch(char_URL + queryParams)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      fetchComicthruName(response);
    });
}

function fetchComicthruName(charId) {
  var queryParams = new URLSearchParams({
    appid: apiKey,
    character: charId,
    hash: md5,
    ts: str(time.time()),
  });
  fetch(comic_URL + queryParams)
    .then((response) => response.json())
    .then((response) => {
      console.log("response from comic");
      console.log(response);
    });
}

function fetchComic(comic) {
  var queryParams = new URLSearchParams({
    appid: apiKey,
    title: comic,
    hash: md5,
    ts: str(time.time()),
  });
  fetch(comic_URL + queryParams)
    .then((response) => response.json())
    .then((response) => {
      console.log("response from comic");
      console.log(response);
    });
}
