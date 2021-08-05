let comicInput = document.getElementById("input");
let comicSrch = document.getElementById("srchbtn");
comicSrch.addEventListener("click", function (event) {
  event.preventDefault();
  if (document.querySelectorAll("#search").value == "comic") {
    let comicName = comicInput.value;
    comicName = comicName.replace(/\s+/g, "-");
    console.log(comicName);
    fetch(`/api/comicName?comic=${comicName}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
});
