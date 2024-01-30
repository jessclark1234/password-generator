// Assignment Code
var specialCharacters = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '(',
  ')',
  '-',
  '_',
  '+',
  '=',
  '{',
  '}',
  '[',
  ']',
  '~',
  '`',
  ',',
];

var lowerCase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

var upperCase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function createPassword() {
  var includeSpecialCharacters = confirm('Click to include special characters');
  var includeNumbers = confirm('Click to include numbers');
  var includeUpperCase = confirm('Click to include uppercase letters');
  var includeLowerCase = confirm('Click to include lowercase letters');
  var includePassLength = prompt('How long would you like your password?');

  // Change this to checkboxes at some point
  if(includeSpecialCharacters === false && includeLowerCase === false && includeNumbers === false && includeUpperCase === false){
    alert = ('Must include at least one(1) uppercase character, one(1) lowercase character, one(1) numeric character and one(1) special charater');
    return;
  }

  var options = {
    includeLowerCase: includeLowerCase,
    includeNumbers: includeNumbers,
    includeSpecialCharacters: includeSpecialCharacters,
    includeUpperCase: includeUpperCase,
    includePassLength: parseInt(includePassLength)
  };

  return options;
}

function generatePassword(){
  var passwordOptions = createPassword();
  var possibleCharacters = [];
  if (passwordOptions.includeLowerCase === true) {
    possibleCharacters = possibleCharacters.concat(lowerCase)
  }
  if (passwordOptions.includeNumbers === true) {
    possibleCharacters = possibleCharacters.concat(numbers)
  }
  if (passwordOptions.includeSpecialCharacters === true) {
    possibleCharacters = possibleCharacters.concat(specialCharacters)
  }
  if (passwordOptions.includeUpperCase === true) {
    possibleCharacters = possibleCharacters.concat(upperCase)
  }
  function generateRandomChar(array){
    var randomIndex = Math.floor(Math.random() * array.length)
    var randomChar = array[randomIndex]
    return randomChar;
  }
  var result = [];
  for (i = 0; i< passwordOptions.includePassLength; i++){
    result.push(generateRandomChar(possibleCharacters))
  }


return (result.join(""));

}


  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password
    // var json_data = JSON.stringify(result)
    // document.write(json_data)
  }

  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
    document.getElementById("Generate Password")
  