let fruits = ["apple", "grape", "banana", "orange"];

let filteredFruitsV1 = fruits.filter((fruit) => fruit == "apple");

let filteredFruitsV2 = fruits.filter(function (fruit) {
  if (fruit == "apple") {
    return `${filteredFruitsV1} is a good for you`;
  } else if (fruit == "grape") {
    return `${fruits} is a bad for you`;
  }
});

console.log(filteredFruitsV1);
console.log(filteredFruitsV2);
