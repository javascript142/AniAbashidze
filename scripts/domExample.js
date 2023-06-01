let pTagValue = document.getElementById("firstPage").innerHTML;

let userInformation = document.getElementById("firstPage").innerHTML;

//alert(userInformation);

if (userInformation == "Keti") {
  document.getElementById("fisrtPage").innerHTML =
    "Wlcome ${userInformation}! ";
}

document.getElementById("welcomeMessage").style.color = "red";

document.getElementsByClassName("test1")[0].style.color = "green";

document.querySelector(".firstname").style.color = "blue";
document.querySelector("#lastname").style.color = "pink";
