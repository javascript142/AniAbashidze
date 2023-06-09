let simpleJsonFile = fetch("/scripts2/sample.json").then((readFile) =>
  console.log(readFile)
);

console.log(sampleJsonFile);
