const dateNow = new Date(); // ეს ბრძანება წამოიღებს ინფორმაციას ამჟამინდელ თარიღზე.

let result = document.createElement("p");

// result.innerHTML = dateNow;

result.innerHTML = new Date(1995, 11, 17, 3, 24, 0);

localStorage.setItem("date", new Date(1995, 11, 17, 3, 24, 0));

document.body.appendChild(result);
