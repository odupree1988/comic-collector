async function collectionButtonHandler(btn, event) {
  // event.preventDefault();
  const id = btn.id.split("btn")[1];
  console.log(id);

  // event.target;
  // console.log(event.target);

  // const comic = document.querySelector("#comicImage").src;
  const title = document.querySelector("#comicTitle").innerHTML;
  const description = document.querySelector("#comicDescription").innerHTML;
  const price = document.querySelector("#comicPrice").innerHTML;
  const comic_url = document.querySelector("#comicUrl").innerHTML;

  // console.log(img.src.value);
  console.log(title);
  console.log(description);
  console.log(price);
  console.log(comic_url);

  //   if (username && email && password) {
  const response = await fetch("/api/comics", {
    method: "post",
    body: JSON.stringify({
      // comic,
      title,
      description,
      price,
      comic_url,
    }),
    headers: { "Content-Type": "application/json" },
  });
  // console.log(comic);
  console.log(title);
  console.log(description);
  console.log(price);

  if (response.ok) {
    //   document.location.replace("/dashboard/");
    console.log("success!");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".searchedComic")
  .addEventListener("click", collectionButtonHandler);
