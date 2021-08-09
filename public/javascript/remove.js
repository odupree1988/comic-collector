const getSavedId = (btn) => {
  const id = btn.id.split("card")[1];
  console.log(id);
  return deleteFormHandler(event, id);
};

async function deleteFormHandler(event, id) {
  event.preventDefault();

  const response = await fetch(`/api/comics/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

// document
//   .querySelector(`.delete-collection`)
//   .addEventListener("click", deleteFormHandler);
