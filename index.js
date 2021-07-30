require('dotenv').config();

const md5 = require('md5');
const crypto = require('crypto');
const axios = require('axios');
const comic_URL ='https://gateway.marvel.com:443/v1/public/comics?'
const char_URL ='https://gateway.marvel.com:443/v1/public/characters?'

const { MARVEL_PRIVATE, MARVEL_PUBLIC } = process.env;

let ts = crypto.randomBytes(20).toString('hex');

let hash = md5(`${ts}${MARVEL_PRIVATE}${MARVEL_PUBLIC}`);
const auth = `ts=${ts}&hash=${hash}&apikey=${MARVEL_PUBLIC}`;

axios.get(`${char_URL}${auth}&name=Hulk`)
  .then(({ data }) => {
    console.log(JSON.stringify(data, null, 2))
  })
  .catch(error => console.log(error));

