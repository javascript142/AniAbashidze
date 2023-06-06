function personDetails() {
  let person = {
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    birthYear: document.getElementById("year").value,
    age: function () {
      return 2023 - parseInt(this.birthYear);
    },
  };
  document.getElementById("result").innerHTML = `Mr/Ms ${person.name} ${
    person.surname
  },thank you for your application. Your age is ${person.age()}`;
}
