let arrayOfColors = ["red", "green", "blue", "yellow", "orange", "black"];
let copiedArrayOfColors = arrayOfColors;
//copiedArrayOfColors.pop();

let shadowCopiedArrayOfColorsV1 = arrayOfColors.slice();
//shadowCopiedArrayOfColors.pop();

//console.log(arrayofColors);
//console.log(copiedArrayOfColors);
//console.log(shadowCopiedArrayOfColors);

let shadowCopiedArrayOfColorsV2 = [...arrayOfColors];
let shadowCopiedArrayOfColorsV3 = Array.from(arrayOfColors);
shadowCopiedArrayOfColorsV3.pop();
console.log(arrayOfColors);
console.log(shadowCopiedArrayOfColorsV3);
