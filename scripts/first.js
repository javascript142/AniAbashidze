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

function typeFour() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 4;
}

function typeFive() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 5;
}

function typeSix() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 6;
}

function typeSeven() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 7;
}

function typeEight() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 8;
}

function typeNine() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 9;
}

function typeZero() {
  var mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = mainInputValue + 0;
}

function typeClear() {
  let mainInputValue = document.getElementById("mainInput").value;
  document.getElementById("mainInput").value = "";
}

function Plus() {
  let mainInputValue = document.getElementById("mainInput").value;
  if (mainInputValue.length > 0 && mainInputValue.slice(-1) !== "+") {
    document.getElementById("mainInput").value = mainInputValue + "+";
  }
}

function Minus() {
  let mainInputValue = document.getElementById("mainInput").value;
  if (mainInputValue.length > 0 && mainInputValue.slice(-1) !== "-") {
    document.getElementById("mainInput").value = mainInputValue + "-";
  }
}

function Multi() {
  let mainInputValue = document.getElementById("mainInput").value;
  if (mainInputValue.length > 0 && mainInputValue.slice(-1) !== "*") {
    document.getElementById("mainInput").value = mainInputValue + "*";
  }
}

function Division() {
  let mainInputValue = document.getElementById("mainInput").value;
  if (mainInputValue.length > 0 && mainInputValue.slice(-1) !== "/") {
    document.getElementById("mainInput").value = mainInputValue + "/";
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
  } else if (mainInputValue.includes("-")) {
    let numbers = mainInputValue.split("-");
    let result = parseInt(numbers[0]);
    for (let i = 1; i < numbers.length; i++) {
      result = result - parseInt(numbers[i]);
    }
    document.getElementById("mainInput").value = result;
  } else if (mainInputValue.includes("*")) {
    let numbers = mainInputValue.split("*");
    let product = 1;

    for (let i = 0; i < numbers.length; i++) {
      product = product * numbers[i];
    }

    document.getElementById("mainInput").value = product;
  } else if (mainInputValue.includes("/")) {
    let numbers = mainInputValue.split("/");
    let quotient = parseFloat(numbers[0]);

    for (let i = 1; i < numbers.length; i++) {
      quotient = quotient / numbers[i];
    }

    document.getElementById("mainInput").value = quotient;
  }
}
