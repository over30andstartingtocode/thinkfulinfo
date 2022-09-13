const caesarModule = (function () {
    // you can add any code you want within this function scope
  
    //create array of all 26 letters;
    const letters = [
      "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ];
  
    //turn input message(string) into array
    function stringToArray(input) {
      const lowerCaseInput = input.toLowerCase(); //change input to all lower case to meet requirement of ignoring capital letters
      return Array.from(lowerCaseInput);
    }
    // retrieve new letter after index shift
    function letterShift(currentIndex, shift) {
      let newIndex = (currentIndex + shift) % 26;
      if (newIndex < 0) newIndex = newIndex + 26;
      return letters[newIndex];
    }
    //create function to return shifted input
    function shiftArray(input, shift) {
      let newArray = stringToArray(input).map((char) => {
        if(letters.indexOf(char) < 0) return char; // if index is less than 0 it is considered nonalphabetic symbol and is returned
        return letterShift(letters.indexOf(char), shift);
      });
      return newArray;
    }
  
  
    function caesar(input, shift, encode = true) {
      // your solution code here
      // invalid shift amount
      if(shift === 0 || shift < -25 || shift > 25 || !shift) return false;
  
      //When decoding the message, you need to know the number the original message was shifted by so that you can shift in the opposite direction.
      if(encode === false) shift = 0 - shift; // ex. shift = 0 - (-3) => shift = 3 => (3 is the opposite direction of -3)
  
      //turn arrayed input back to string
      let hiddenMessage = shiftArray(input, shift).join("");
      return hiddenMessage;
      
    }
  
    return {
      caesar,
    };
  })();
  
  module.exports = { caesar: caesarModule.caesar };