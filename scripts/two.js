function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      console.log(contents);
      resolve(contents);
    };
    reader.onerror = function (event) {
      reject(event.target.error);
    };

    if (file.type.startsWith("image/")) {
      reader.readAsDataURL(file);
    } else {
      reject(new Error("Unsupported file type: " + file.type));
    }
  });
}

function displayImage(contents) {
  const output = document.getElementById("output");
  output.innerHTML = `<img width=600px; height=300px; src="${contents}" />`;
}

function handleFile() {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files[0];
  const output = document.getElementById("output");
  if (!file) {
    output.style.color = "red";
    output.innerText = "No file selected";
    return;
  }

  readFileAsync(file)
    .then((fileContents) => {
      if (file.type.startsWith("image/")) {
        displayImage(fileContents);
      } else {
        output.textContent = fileContents;
      }
    })
    .catch((error) => {
      output.style.color = "red";
      output.textContent = error;
    });
}
