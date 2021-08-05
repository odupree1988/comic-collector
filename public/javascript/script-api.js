let userInput = document.getElementById("input");
let srchbtn = document.getElementById("srchbtn");
// let comicData =[]
// let imagesArr=[]
// let urlArr=[]
// let titleArr=[]
// let descArr=[]
// let priceArr=[]
var body = document.body;


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


    let container =document.createElement('div')
    container.className ="container mt-3 row"
    body.appendChild(container)
    
    let card = document.createElement('div')
    card.className ="col-sm col-md col-lg col-xl col-xxl border-top border-right border-bottom pl-0 media"
    card.setAttribute("id","cardEl")
    container.appendChild(card)
    
    let image= document.createElement("img")
    image.setAttribute("id","comicImg")
    image.className ="align-self-center mr-3"
    let imageData =data.data.results[i].images[0].path
    let s ="s"
    var position = 4 
    imageData = [imageData.slice(0,position),s,imageData.slice(position)].join('')
    imageData= imageData+"/clean.jpg"
    image.src =imageData
    card.appendChild(image)
    
    // imagesArr.push(imageData)
    
    let listContainer = document.createElement("div")
    listContainer.className ="media-body align-self-center font-weight-light border-top border-bottom"
    listContainer.setAttribute("id","liCon")
    card.appendChild(listContainer)
    
    
    let title = document.createElement("h5")
    title.className= "mt-0"
    let titleData=data.data.results[i].title
    // titleArr.push(titleData)
    title.innerText = `Title: ${titleData}`
    title.setAttribute("id","comicTitle")
    listContainer.appendChild(title)
    
    let listArea= document.createElement("ul")
    listContainer.appendChild(listArea)
    
    // console.log(data.data.results[i].title)
    let price = document.createElement("li")
    let priceData=data.data.results[i].prices[0].price
    price.innerText = `Price: ${priceData}`
    price.setAttribute("id","comicPrice")
    listArea.appendChild(price)
    
    
    let url = document.createElement("li")
    let aTag =document.createElement("a")
    url.appendChild(aTag)
    url.setAttribute("id","comicUrl")
    let urlData = data.data.results[i].urls[0].url
    urlData= urlData.split("?")[0]
    console.log(urlData)
    // urlArr.push(urlData)
    aTag.href =urlData
    aTag.innerText="Digital Comic"
    listArea.appendChild(url)
    
    let description = document.createElement("li")
    description.setAttribute("id","comicDescription")
    let descData=data.data.results[i].description
    // descArr.push(descData)
    if(descData=== null){
      description.innerText="No available description"
    }else{
      description.innerText = `Description: ${descData}`
    }
    listArea.appendChild(description)

  }
  // comicData.push(imagesArr,titleArr,priceArr,urlArr,descArr)
  // console.log(comicData[0])
// console.log(comicData[1])
}
// data.results[0].prices[0]
// data.results[0].thumbnail.path
// data.results[0].urls[0]
// data.results[0].title
// data.results[1].description