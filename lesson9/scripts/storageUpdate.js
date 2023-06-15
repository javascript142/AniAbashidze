let username = "user4";
let password = "1234123";

let oldUserData = localStorage.getItem("userData");
oldUserData = JSON.parse(oldUserData);

oldUserData.push({ userName: username, password: password });

localStorage.setItem("userData", JSON.stringify(oldUserData));
