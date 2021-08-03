let userInput = document.getElementById("input");
let srchbtn = document.getElementById("srchbtn");

srchbtn.addEventListener("click", function () {
  let comicName = userInput.value;
  comicName = comicName.replace(/\s+/g,"-")
  console.log(comicName);
  fetch(`http://localhost:3001/api/comicName?comic=${comicName}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
});
