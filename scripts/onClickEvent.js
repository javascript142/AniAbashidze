function usernameChecker() {
  var username = document.getElementById("username").value;
  console.log(username);
  if (username === "Keti") {
    document.getElementById("result").innerHTML = `Welcome ${username}!`;
  } else {
    document.getElementById("result").innerHTML = "Invalid username!";
  }
}

function typeone() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 1;
}

function typeTwo() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 2;
}

function typeThree() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 3;
}
function Plus() {
  let mainInputValue = document.getElementById("mainInput").value;
  if (mainInputValue.length > 0) {
    document.getElementById("mainInput").value = mainInputValue + "+";
  }
}

function Equal() {
  let mainInputValue = document.getElementById("mainInput").value;
  if (mainInputValue.includes("+")) {
    let numbers = mainInputValue.split("+");
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum = sum + parseInt(numbers[i]);
    }
    document.getElementById("mainInput").value = sum;
  }
}
