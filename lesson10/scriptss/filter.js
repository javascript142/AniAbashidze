function searchContact() {
  let input, filter, ul, li, a, i, txtValue; // რამოდენიმე ცვლადი შევქმენით ერთდროულად, რომელთაც მნიშვნელობა არ გააჩნიათ

  input = document.getElementById("userInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("contacts");
  li = document.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0]; // ამოიღებს პირველ ელემენტზე არსებულ a ტეგს.
    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
