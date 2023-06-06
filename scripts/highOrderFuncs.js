let fruits = ["apple", "grape", "apple", "banana", "banana"];

let filteredFruits = [];

for (let fruit of fruits) {
  if (fruit !== "apple") {
    filteredFruits.push(fruit);
  }
}
//console.log(filteredFruits);

let filteredFruitsV1 = fruits.filter((fruit) => fruit !== "apple");
//let filteredFruitsV1 = fruits.filter((fruit) => !fruit.includes("apple")); //same as above line

let filteredFruitsV2 = fruits.filter(function (fruit) {
  if (fruit !== "apple") {
    return true;
  } else {
    return false; //else is not important
  }
});

//console.log(filteredFruitsV1);
//console.log(filteredFruitsV2);

let participants = ["John Kennedy", "John Adams", "John Smith"];

let announcements = participants.map((participants) => {
  return `${participants} has joined the contest`; //temple string
});

console.log(participants);
console.log(announcements);

//forEach

participants.forEach((participants) => {
  //for(let participants of participants) same
  //console.log(`${participants} has joined the contest`);
});

//reduce

let numbers = [1, 2, 3, 4, 5];

let sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

//console.log(sum);

//every

let isAllFruits = fruits.every((fruit) => {
  return fruit.includes("apple");
});
//console.log(isAllFruits);

let usernames = ["flappyBird", "gamer123", "admin", "admin123"];
let userPrompt = prompt("Enter username");
let isUsernameTaken = usernames.some((username) => {
  return username.includes(userPrompt);
});
//console.log(isUsernameTaken);
if (isUsernameTaken) {
  alert("username is taken");
}

//some

let isSomeApple = fruits.some((fruit) => {
  return fruit.includes("apple");
});
//console.log(isSomeApple);
