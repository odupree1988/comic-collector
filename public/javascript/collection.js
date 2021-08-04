async function collectionButtonHandler(event) {
  event.preventDefault();

  const comic = document.getElementById("comic-image").innerHTML;
  const title = document.querySelector("#comic-title").innerHTML;
  const description = document.querySelector("#comic-description").innerHTML;
  const price = document.querySelector("#comic-price").innerHTML;
  //   const url = document.querySelector("#comic-url").innerHTML;

  console.log(comic);
  console.log(title);
  console.log(description);
  console.log(price);

  //   if (username && email && password) {
  const response = await fetch("/api/comics", {
    method: "post",
    body: JSON.stringify({
      comic,
      title,
      description,
      price,
    }),
    headers: { "Content-Type": "application/json" },
  });
  console.log(comic);
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
// }

document
  .querySelector(".add-collection")
  .addEventListener("click", collectionButtonHandler);
