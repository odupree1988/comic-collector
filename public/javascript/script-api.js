let userInput = document.getElementById("input");
let srchbtn = document.getElementById("srchbtn");

srchbtn.addEventListener("click", function (event) {
  event.preventDefault();
  if(document.querySelectorAll("#search").value =="comic"){
    let character = userInput.value;
    character = character.replace(/\s+/g,"-")
    console.log(character);
    fetch(`http://localhost:3001/api/characters?character=${character}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  }else{
    let comicName = userInput.value;
  comicName = comicName.replace(/\s+/g,"-")
  console.log(comicName);
  fetch(`http://localhost:3001/api/comicName?comic=${comicName}`)
    .then((res) => res.json())
    .then((data) => console.log(data));
  }
});
