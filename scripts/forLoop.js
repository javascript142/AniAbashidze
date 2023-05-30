let names = ["John", "Jane", "Mary", "Mark", "Bob", "Chris"];

let groupA = [];
let groupB = [];

/* for (let count = 0; names.length > count; count = count + 1) {
  if (count % 2 !== 0) {
    groupA.push(names[count]);
  } else if (count % 2 === 0) {
    groupB.push(names[count]);
  }
}
console.log(groupA);
console.log(groupB); */

for (let name of names) {
  if (names.indexOf(name) % 2 !== 0) {
    groupA.push(name);
  } else if (names.indexOf(name) % 2 === 0) {
    groupB.push(name);
  }
}
console.log(groupA);
console.log(groupB);
