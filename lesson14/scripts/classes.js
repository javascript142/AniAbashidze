// კლასში არსებულ ფუნქციებს ვუწოდებთ მეთოდებს

class Person {
  constructor(nameOfuser, ageOfUser) {
    this.name = nameOfuser;
    this.age = ageOfUser;
  }

  sayHello() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }

  introduce() {
    console.log(`Allow me to introduce myself! My name is ${this.name}.`);
  }

  celebrateBirthday() {
    this.age++;
    console.log(`It's my birthday! I am now ${this.age} years old.`);
  }
}

const person = new Person("John", 30);
person.sayHello(); // Hello, my name is John and I am 30 years old.
person.introduce(); // Allow me to introduce myself! My name is John.
person.celebrateBirthday(); // It's my birthday! I am now 31 years old.
