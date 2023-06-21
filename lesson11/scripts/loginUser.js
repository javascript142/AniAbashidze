const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = " ";
  const charactersLength = characters.length; // სიმბოლოთა ზომა ზემოთ მოცემულ characters ცვლადის

  for (let i = 0; i < length; i++) {
    result =
      result + characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function handleLogin() {
  let username = document.getElementById("inputUsername").value;
  let password = document.getElementById("inputPassword").value;

  let usersData = localStorage.getItem("usersData");
  usersData = JSON.parse(usersData);

  let userExists = false;

  for (let user = 0; user < usersData.length; user++) {
    if (
      usersData[user].username === username &&
      usersData[user].password === password
    ) {
      let sessionToken = generateString(36).replace(" ", "");
      localStorage.setItem("sessionToken", sessionToken);
      usersData[user].sessionToken = sessionToken;
      userExists = true;
    }
  }

  if (userExists === false) {
    window.location.href = "loginFailed.html";
  } else {
    window.location.href = "loginSuccess.html";
  }

  localStorage.setItem("usersData", JSON.stringify(usersData));

  // loginForm.addEventListener('submit', function (event) {
  //     event.preventDefault(); // უარყავი ფორმის ნაგულისხმიევი მოქმედება რომლეიც გულისხმობს მომხმარებლის სხვა გვერდზე გადამისამართებას
  // }
  // )
}
