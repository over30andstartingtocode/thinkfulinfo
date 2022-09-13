// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  const gridCoordinates = [
    { letter: "a", number: "11" },
    { letter: "b", number: "21" },
    { letter: "c", number: "31" },
    { letter: "d", number: "41" },
    { letter: "e", number: "51" },
    { letter: "f", number: "12" },
    { letter: "g", number: "22" },
    { letter: "h", number: "32" },
    { letter: "i", number: "42" },
    { letter: "j", number: "42" },
    { letter: "k", number: "52" },
    { letter: "l", number: "13" },
    { letter: "m", number: "23" },
    { letter: "n", number: "33" },
    { letter: "o", number: "43" },
    { letter: "p", number: "53" },
    { letter: "q", number: "14" },
    { letter: "r", number: "24" },
    { letter: "s", number: "34" },
    { letter: "t", number: "44" },
    { letter: "u", number: "54" },
    { letter: "v", number: "15" },
    { letter: "w", number: "25" },
    { letter: "x", number: "35" },
    { letter: "y", number: "45" },
    { letter: "z", number: "55" },
  ];
  
// convert given letter to corresponding number
function letterToNumber(letter) {
for(let i = 0; i < gridCoordinates.length; i++){
  if(gridCoordinates[i].letter === letter) return gridCoordinates[i].number;
}
}

// turn string of numbers into string of letters
function decodeInput(input) {
let output = "";
let code = input.split(" ");
code.forEach(group => {
  // group the numbers in input in pairs ("1123" => ["11", "23"])
  let pairs = group.match(/..?/g);
  pairs.forEach(pair => {
  // "i" and "j" both have number "42". When decoding, both letters should somehow be shown.
    if (pair === "42") {
      output = output + "(i/j)";
    } else {
      // match given pair with object number to find letter
      const letter = gridCoordinates.find(coord => coord.number === pair).letter; 
      if (letter !== 0) {
        output = output + letter;
      }
    }
  });
  output = output + " "; // insert spaces back
});
return output.trim(); // remove space from end of string
}

// turn string of letters into string of numbers
function encodeInput(input) {
let splitInput = input.toLowerCase().split(""); // divide each letter of string and place into array
let codedInput = splitInput.map((char) => {
  if(char === " ") return char;
  return letterToNumber(char);
});
return codedInput.join(""); // turn arrayed result back to string
}

function polybius(input, encode = true) {
  // your solution code here
  // make sure # of characters excluding spaces is even
  if(encode === false && input.replace(" ", "").length % 2 !== 0) return false; 

  if(input && encode ) return encodeInput(input);

  if(input && encode === false) return decodeInput(input);

}

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
