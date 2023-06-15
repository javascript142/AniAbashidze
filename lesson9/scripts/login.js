function loginToSystem() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let result = document.getElementById("result");

  let userData = localStorage.getItem("userData");
  userData = JSON.parse(userData);

  let isPasswordCorrect = false;
  let isUsernameCorrect = false;

  for (let userInfo of userData) {
    if (userInfo.userName === username) {
      if (userInfo.password === password) {
        result.innerHTML = "You have logged to system!";
        result.style.color = "green";
        isPasswordCorrect = true;
      } else {
        result.innerHTML = "Error: password is incorrect!";
        result.style.color = "red";
      }
    } else {
      isUsernameCorrect = true;
      result.style.color = "red";
      result.innerHTML = "Error: username is incorrect";
    }
  }

  if (isUsernameCorrect === false) {
    result.innerHTML = "Error: username is incorrect";
    result.style.color = "red";
  }
}
