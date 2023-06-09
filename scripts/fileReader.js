function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      console.log(contents); //სამიზნე მოქმედების შედეგი
      resolve(contents); //აქ მოდის როცა წარმატებით წაიკითხავს ფაილ
    };
    reader.onerror = function (event) {
      reject(event.target.error); // აქ მოდის მაშინ როცა წარუმატებლად
    };

    //console.log(file.type);
    if (file.type.startsWith("text")) {
      reader.readAsText(file);
    } else if (file.type.startsWith("image")) {
      reader.readAsDataURL(file);
    } else {
      reject(new Error("Unsupported file type: "));
    }
    //reader.readAsText(file);
  });
}

function displayImage(contents) {
  const output = document.getElementById("output");
  output.innerHTML = `<img width=400px; height=200px; src= "${contents}" />`;
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
      } else {
        output.textContent = fileContents;
      }
      //output.textContent = fileContents;
    })
    .catch((error) => {
      output.style.color = "red";
      output.textContent = error;
    });
}
