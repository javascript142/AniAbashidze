const form = document.querySelector("form"); // ამ ზოლზე ხდება ფორმის ტეგის სახელით მასზე ინფორმაციის წამოღება
const emailInput = document.getElementById("email"); // ამ ზოლზე ხდება ინფორმაციის წამოღება მითითებული იდენტიფიკატორით

emailInput.addEventListener("invalid", function (event) {
  event.preventDefault();
  emailInput.setCustomValidity("Please enter a valid email!");
});

emailInput.addEventListener("input", function (event) {
  emailInput.setCustomValidity(""); // მორგებული შეცდომის ტექსტის დარესეთება მომხმარებლის მონაცემების შეტანის შემდეგ
});

form.addEventListener("submit", function (event) {
  if (!emailInput.checkValidity()) {
    event.preventDefault();
  }
  alert(emailInput.validationMessage);
});
