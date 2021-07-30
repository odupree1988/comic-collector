const md5 = require('md5');


function callApi() {
document.querySelector('input').value
}

function fetchCharacter(charName){
    var queryParams = new URLSearchParams({
        appid: apiKey,
        name: "hulk",
        hash: md5,
        ts: str(time.time()),
    })
    fetch(char_URL + queryParams)
    console.log(char_URL + queryParams)
    .then((response)=>response.json())
    .then((response)=>{
        console.log(response);
    fetchComicthruName(response);
})}

function fetchComicthruName(charId) {
    var queryParams = new URLSearchParams({
        appid: apiKey,
        character: charId,
    hash: md5,
    ts: str(time.time()),
});
console.log(comic_URL + queryParams)
fetch(comic_URL + queryParams)
.then((response) => response.json())
.then((response) => {
    // console.log("response from comic");
    console.log("response from comic"+response);
})
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
    })
 }
 fetchCharacter()
 
 