// async function getId(btn) {
//   const id = btn.id.split("btn")[1];
//   console.log(id);

  // const response = await fetch(`api/comics/${id}`, {
  //   method: "get",
  //   // body: JSON.stringify({
  //   //   comic,
  //   //   title,
  //   //   description,
  //   //   price,
  //   // }),
  //   headers: { "Content-Type": "application/json" },
  // });
  // if (response.ok) {
  //   console.log("success");
  //   // document.location.replace("/dashboard");
  // } else {
  //   alert(response.statusText);
  // }
// }

// const saveHandler = () => {
//   console.log("that tickles");
// };

// document.querySelector("#test").addEventListener("click", saveHandler);

// async function getId(btn) {
//   const id = btn.id.split("btn")[1];
//   console.log(id);

// const comic = document.querySelector("#saved-comic").innerHTML;
// const title = document.querySelector("#saved-title").innerHTML;
// const description = document.querySelector("#saved-description").innerHTML;
// const price = document.querySelector("#saved-price").innerHTML;

// const response = await fetch("/api/comics/:id", {
//   method: "get",
//   body: JSON.stringify({
//     comic,
//     title,
//     description,
//     price,
//   }),
//   headers: { "Content-Type": "application/json" },
// });
// if (response.ok) {
//   console.log("success");
//   document.location.replace("/dashboard");
// } else {
//   alert(response.statusText);
// }
// }

// const saveHandler = () => {
//   console.log("that tickles");
// };

// document.querySelector(".selected-comic").addEventListener("click", getId);
