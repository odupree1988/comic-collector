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
  if (document.querySelectorAll("#search").value == "hero") {
    let character = userInput.value;
    character = character.replace(/\s+/g, "-");
    console.log(character);
    fetch(`http://localhost:3001/api/characters?character=${character}`)
      .then((res) => res.json())
      .then((data) => renderImg(data));
  } else {
    let comicName = userInput.value;
    comicName = comicName.replace(/\s+/g, "-");
    console.log(comicName);
    fetch(`http://localhost:3001/api/comicName?comic=${comicName}`)
      .then((res) => res.json())
      .then((data) => renderImg(data))
      .catch((err) => console.log(err));
  }
});

function renderImg(data) {
  console.log(data);
  fetch("/api/comics/generateCards", {
    method: "post",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  }).then((data) => console.log);
  for (let i = 0; i < data.data.results.length; i++) {
    let container = document.createElement("div");
    container.className = "container mt-3 add-collection";
    body.appendChild(container);

    let row = document.createElement("div");
    row.className = "row";
    container.appendChild(row);

    let card = document.createElement("div");
    card.className = "col-sm col-md col-lg col-xl col-xxl pl-0";
    card.setAttribute("id", "cardEl");
    row.appendChild(card);

    let media = document.createElement("div");
    media.className = "media";
    card.appendChild(media);

    let image = document.createElement("img");
    image.id = "comicImage";
    image.className = "align-self-center mr-3";
    image.setAttribute("id", "comicImg");
    let imageData = data.data.results[i].images[0].path;
    let s = "s";
    var position = 4;
    imageData = [
      imageData.slice(0, position),
      s,
      imageData.slice(position),
    ].join("");
    imageData = imageData + "/clean.jpg";
    image.src = imageData;
    media.appendChild(image);

    // imagesArr.push(imageData)

    let listContainer = document.createElement("div");
    listContainer.className = "media-body align-self-center";
    listContainer.setAttribute("id", "liCon");
    media.appendChild(listContainer);

    let title = document.createElement("h5");
    title.id = "comicTitle";
    title.className = "border-top";
    let titleData = data.data.results[i].title;
    // titleArr.push(titleData)
    title.innerText = `Title: ${titleData}`;
    title.setAttribute("id", "comicTitle");
    listContainer.appendChild(title);

    // let listArea = document.createElement("ul");
    // listContainer.appendChild(listArea);

    // console.log(data.data.results[i].title)
    let price = document.createElement("p");
    price.id = "comicPrice";
    price.className = "border-top";
    let priceData = data.data.results[i].prices[0].price;
    price.innerText = `Price: ${priceData}`;
    price.setAttribute("id", "comicPrice");
    listContainer.appendChild(price);

    let url = document.createElement("p");
    url.id = "comicUrl";
    url.className = "border-top";
    let aTag = document.createElement("a");
    aTag.setAttribute("target", "_blank");
    url.appendChild(aTag);
    url.setAttribute("id", "comicUrl");
    let urlData = data.data.results[i].urls[0].url;
    urlData = urlData.split("?")[0];
    console.log(urlData);
    // urlArr.push(urlData)
    aTag.href = urlData;
    aTag.innerText = "Digital Comic";
    listContainer.appendChild(url);

    let description = document.createElement("p");
    description.id = "comicDescription";
    description.className = "border-top border-bottom";
    description.setAttribute("id", "comicDescription");
    let descData = data.data.results[i].description;
    // descArr.push(descData)
    if (descData === null) {
      description.innerText = "No Description Available";
    } else {
      description.innerText = `Description: ${descData}`;
    }
    listContainer.appendChild(description);

    let btnContainerEl = document.createElement("div");
    btnContainerEl.className = "col text-center mt-4";
    listContainer.appendChild(btnContainerEl);

    let containerBtnEl = document.createElement("button");
    containerBtnEl.setAttribute("type", "submit");
    containerBtnEl.className = "btn btn-primary mr-1 add-collection";
    containerBtnEl.innerText = "Add to Collection";
    btnContainerEl.appendChild(containerBtnEl);

    let wishBtnEl = document.createElement("button");
    wishBtnEl.setAttribute("type", "submit");
    wishBtnEl.className = "btn btn-primary ml-1 add-wishlist";
    wishBtnEl.innerText = "Add to Wish List";
    btnContainerEl.appendChild(wishBtnEl);
  }

  let collectionEl = document.createElement("script");
  collectionEl.setAttribute("src", "/javascript/collection.js");
  body.appendChild(collectionEl);
  // comicData.push(imagesArr,titleArr,priceArr,urlArr,descArr)
  // console.log(comicData[0])
  // console.log(comicData[1])
}

// data.results[0].prices[0]
// data.results[0].thumbnail.path
// data.results[0].urls[0]
// data.results[0].title
// data.results[1].description
