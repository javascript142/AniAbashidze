const form = document.querySelector("form");
const userChoice = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const password = userChoice.value;
  if (password === "12345678") {
    window.location.href = "https://www.google.com";
  } else {
    alert("Wrong password!");
  }
});
