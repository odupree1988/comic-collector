var dailyComicImg = document.getElementById("dailyComic");
var aTagImg = document.getElementById("aTagImg");
fetch(`/api/randComic?`)
  .then((res) => res.json())
  .then((data) => getComic(data));
function getComic(data) {
  console.log(data);
  let imageData = data.data.results[0].images[0].path;
  let s = "s";
  var position = 4;
  imageData = [imageData.slice(0, position), s, imageData.slice(position)].join(
    ""
  );
  imageData = imageData + "/clean.jpg";
  dailyComicImg.src = imageData;
  let urlData = data.data.results[0].urls[0].url;
  urlData = urlData.split("?")[0];
  aTagImg.href = urlData;
}
