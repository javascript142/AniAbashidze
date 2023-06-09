function readFileAsync(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const contents = event.target.result;
      resolve(contents);
    };
    reader.onerror = function (event) {
      reject(event.target.error);
    };
    reader.readAsText(file);
  });
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
    .then(function (fileContents) {
      var totalCharacters = fileContents.length;
      output.innerHTML = "Total symbols: " + totalCharacters + "<br/>";

      var words = fileContents.split(/\s+/);
      var totalWords = words.length;
      output.innerHTML += "Total Words: " + totalWords + "<br/>";

      var longestWord = "";
      var shortestWord = words[0];
      for (var i = 0; i < words.length; i++) {
        var word = words[i];
        if (word.length > longestWord.length) {
          longestWord = word;
        }
        if (word.length < shortestWord.length) {
          shortestWord = word;
        }
      }
      output.innerHTML += "Longest Word: " + longestWord + "<br/>";
      output.innerHTML += "Shortest Word: " + shortestWord + "<br/>";

      var totalWordLength = 0;
      words.forEach(function (word) {
        totalWordLength += word.length;
      });
      var averageWordLength = totalWordLength / totalWords;
      output.innerHTML +=
        "Average Word Length: " + averageWordLength.toFixed(2);
    })
    .catch(function (error) {
      output.style.color = "red";
      output.textContent = error;
    });
}
