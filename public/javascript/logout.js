async function logout() {
  const response = await fetch("api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    // doncument.location.replace("/");
    console.log("success!")
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logout").addEventListener("click", logout);
