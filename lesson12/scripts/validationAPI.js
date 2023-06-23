const form = document.querySelector("form"); // ამ ზოლზე ხდება ფორმის ტეგის სახელით მასზე ინფორმაციის წამოღება
const nameInput = document.getElementById("name"); // ამ ზოლზე ხდება ინფორმაციის წამოღება მითითებული იდენტიფიკატორით

form.addEventListener("submit", (event) => {
  console.log(nameInput.checkValidity());
  if (!nameInput.checkValidity()) {
    alert("Please enter a valid name!");
  }
  event.preventDefault();
});
