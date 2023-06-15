localStorage.setItem("username", "fluffyPanda123");

let userData = [
  { userName: "user1", password: 123123 },
  { userName: "user2", password: 123123447847884 },
  { userName: "user3", password: 123123010101 },
];

localStorage.setItem("userData", JSON.stringify(userData));

let username = localStorage.getItem("username");
//console.log(username);

//localStorage.removeItem("username"); // es shlis konkretul monacems

//localStorage.clear(); // es wmindavs yvelanair informacias

let usernameInput = prompt("Enter your username: ");
let passwordInput = prompt("Enter your password: ");

let userDataFromDB = localStorage.getItem("userData");

userDataFromDB = JSON.parse(userDataFromDB);

for (let userInfo of userDataFromDB) {
  if (userInfo.userName === usernameInput) {
    if (userInfo.password === passwordInput) {
      console.log("you have logged in");
      isPassCorrect = true;
    } else {
      console.log("Incorrect Pasword!");
    }
  }
}
console.log("username is  incorrect!");

console.log(userDataFromDB);
