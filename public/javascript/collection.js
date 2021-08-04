async function collectionButtonHandler(event) {
  event.preventDefault();

  const comic = document.querySelector("#comic-image").value;
  const title = document.querySelector("#comic-description").value;
  const description = document.querySelector("#comic-description").value;
  const price = document.querySelector("#comic-price").value;
  const url = document.querySelector("#comic-url").value;

  if (comic && title && description && price && url) {
    const response = await fetch("/api/comics", {
      method: "post",
      body: JSON.stringify({
        comic,
        title,
        description,
        price,
        url,
      }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
      console.log("success");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector("#add-collection")
  .addEventListener("submit", loginFormHandler);
