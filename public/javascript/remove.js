// async function deleteFormHandler(btn) {
// //   event.preventDefault();

//   const id = btn.id.split("card")[1];
//   console.log(id);

//   const response = await fetch(`/api/comics/${id}`, {
//     method: "DELETE",
//   });

//   if (response.ok) {
//     console.log('success');
//   } else {
//     alert(response.statusText);
//   }
// }

// document
//   .querySelector(`.delete-collection`)
//   .addEventListener("submit", deleteFormHandler);
