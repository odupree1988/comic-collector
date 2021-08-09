async function collectionButtonHandler(btn, event) {
  event.preventDefault();
  const id = btn.id.split("btn")[1];
  // console.log(id);
  console.log(event.target);

  event.target;
  console.log(event.target);

  const comic = document.getElementById(`comicImage${id}`).src;
  const title = document.querySelector(`#comicTitle${id}`).innerHTML;
  const description = document.querySelector(
    `#comicDescription${id}`
  ).innerHTML;
  const price = document.querySelector(`#comicPrice${id}`).innerHTML;
  const comic_url = document.querySelector(`#comicUrl${id}`).href;

  console.log(comic);
  console.log(title);
  console.log(description);
  console.log(price);
  console.log(comic_url);

  //   if (username && email && password) {
  const response = await fetch(`/api/comics`, {
    method: "post",
    body: JSON.stringify({
      comic,
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
  // .querySelector(`#btn${id}`)
  .addEventListener("click", collectionButtonHandler);
