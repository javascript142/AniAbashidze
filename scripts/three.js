//ტექსტურ ფაილს არ მიხსნის,არადა ვიცი,რომ სწორად მიწერია

function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      console.log(contents); // Result of the intended action
      resolve(contents); // Resolves when the file is successfully read
    };
    reader.onerror = function (event) {
      reject(event.target.error); // Rejects when an error occurs
    };

    if (file.type.startsWith("text")) {
      reader.readAsText(file);
    } else if (file.type.startsWith("image")) {
      reader.readAsDataURL(file);
    } else if (file.type.startsWith("video")) {
      reader.readAsArrayBuffer(file);
    } else if (
      file.type.startsWith(
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      )
    ) {
      reader.readAsArrayBuffer(file);
    } else {
      reject(new Error("Unsupported file type: " + file.type));
    }
  });
}

function displayImage(contents) {
  const output = document.getElementById("output");
  output.innerHTML = `<img width=400px; height=200px; src="${contents}" />`;
}

function displayVideo(contents) {
  const output = document.getElementById("output");
  output.innerHTML = `<video width=400px; height=200px; controls><source src="${contents}" type="video/mp4"></video>`;
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
      if (file.type.startsWith("image")) {
        displayImage(fileContents);
      } else if (file.type.startsWith("video")) {
        displayVideo(URL.createObjectURL(file));
      } else {
        output.textContent = fileContents;
      }
    })
    .catch((error) => {
      output.style.color = "red";
      output.textContent = error;
    });
}
