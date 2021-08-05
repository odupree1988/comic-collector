let userInput = document.getElementById("input");
let srchbtn = document.getElementById("srchbtn");
let comicData =[]
let imagesArr=[]
let urlArr=[]
let titleArr=[]
let descArr=[]
let priceArr=[]



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
for(let i=0; i < data.data.results.length; i++){

  
  let imageData =data.data.results[i].images[0].path
  let s ="s"
  var position = 4 
  imageData = [imageData.slice(0,position),s,imageData.slice(position)].join('')
  imageData= imageData+"/clean.jpg"
  imagesArr.push(imageData)
  

 let price = document.getElementById("priceElem")
 let priceData=data.data.results[i].prices[0].price
 price.innerText = `Price: ${priceData}`
 console.log(data.data.results[i].prices[0].price)
 priceArr.push(priceData)
 
 let title = document.getElementById("titleElem")
 let titleData=data.data.results[i].title
 titleArr.push(titleData)
 title.innerText = `Title: ${titleData}`
console.log(data.data.results[i].title)

let description = document.getElementById("descElem")
let descData=data.data.results[i].description
descArr.push(descData)
description.innerText = `Description: ${descData}`

let url = document.getElementById("urlElem")
let urlData = data.data.results[i].urls[0].url
urlData= urlData.split("?")[0]
console.log(urlData)
urlArr.push(urlData)
url.href =urlData
url.innerText="Digital Comic"
}
comicData.push(imagesArr,titleArr,priceArr,urlArr,descArr)
console.log(comicData[0])
console.log(comicData[1])

let image= document.getElementById("comicImg")
image.src =comicData[0][0]
}
// data.results[0].prices[0]
// data.results[0].thumbnail.path
// data.results[0].urls[0]
// data.results[0].title
// data.results[1].description