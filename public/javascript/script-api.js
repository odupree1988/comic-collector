let userInput = document.getElementById("input");
let srchbtn = document.getElementById("srchbtn");

srchbtn.addEventListener("click", function (event) {
  event.preventDefault();
  if(document.querySelectorAll("#search").value =="hero"){
    let character = userInput.value;
    character = character.replace(/\s+/g,"-")
    console.log(character);
    fetch(`http://localhost:3001/api/characters?character=${character}`)
    .then((res) => res.json())
    .then((data) => renderImg(data));
  }else{
    let comicName = userInput.value;
  comicName = comicName.replace(/\s+/g,"-")
  console.log(comicName);
  fetch(`http://localhost:3001/api/comicName?comic=${comicName}`)
    .then((res) => res.json())
    .then((data) => renderImg(data))
    .catch(err=>console.log(err))

  }
});

function renderImg(data){
console.log(data)
let image= document.getElementById("comicImg")
image.src = data.data.results[0].images[0].path
console.log(data.data.results[0].images[0].path)

 let price = document.getElementById("priceElem")
price.innerText = `Price:${data.data.results[0].prices[0].price}`
console.log(data.data.results[0].prices[0].price)

 let title = document.getElementById("titleElem")
title.innerText = `Title:${data.data.results[0].title}`
console.log(data.data.results[0].title)

let description = document.getElementById("descElem")
description.innerText = "Deescription:"+data.data.results[1].description

let url = document.getElementById("urlElem")
let urldata = data.data.results[0].urls[0].url
urldata= urldata.split("?")[0]
console.log(urldata)
url.href =urldata
url.innerHTML="Digital Comic"

}
// data.results[0].prices[0]
// data.results[0].thumbnail.path
// data.results[0].urls[0]
// data.results[0].title
// data.results[1].description