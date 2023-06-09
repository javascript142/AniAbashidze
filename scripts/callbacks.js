// function readFileAsync(path, callback) {
//   //simulating asynchronous file read
//   setTimeout(() => {
//     const content = "FIle content";
//     callback(null, content); //calling callback with null error and content
//   }, 1000);
// }

// readFileAsync("path/to/file", (err, content) => {
//   if (err) {
//     console.error("Error: ", err);
//     return;
//   }
//   console.log("file content: ", content);
// });

function readFileAsyncUsingPromises(path) {
  return new Promise((resolve, reject) => {
    //simulating asynchronous file read
    setTimeout(() => {
      const content = "File content";
      resolve(content); //calling resolve with content
    }, 1000);
  });
}

readFileAsyncUsingPromises("path/to/file")
  .then((content) => {
    console.log("File content: ", content);
  })
  .catch((err) => {
    console.error("Error: ", err);
  });
