
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // Declare variables and split password criteria (upper, lower, number, special) into respective arrays
  var password = "";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var specialCharacters = " !#$%&'()*+,-./:;<=>?@[^_`{|}~";
  var numberList = "0123456789";

  var passwordArray = password.split();
  var uppersArray = upperCaseCharacters.split("");
  var lowersArray = lowerCaseCharacters.split("");
  var specialsArray = specialCharacters.split("");
  var numbersArray = numberList.split("");

  console.log(uppersArray);

  // Generate prompts and assign input to variables 
var passwordLength = window.prompt("How long would you like your password?  Must be between 8 and 128 characters");
if(passwordLength < 8 || passwordLength > 128) {
  generatePassword();
} else {
  var characters = [];
  var password = "";
  console.log("Correct Length");
  var upperCase = window.confirm("Do you want upper-case chars?");
  if (upperCase) {
    characters = characters.concat(uppersArray);
    password = password + getRandomElement(uppersArray);
  }
  var lowerCase = window.confirm("Do you want lower-case chars?");
  if (lowerCase) {
    characters = characters.concat(lowersArray);
    password = password + getRandomElement(lowersArray);
  }
  var specialChars = window.confirm("Do you want special chars?");
  if (specialChars) {
    characters = characters.concat(specialsArray);
    password = password + getRandomElement(specialsArray);
  }
  var numbers = window.confirm("Do you want numbers?");
  if (numbers) {
    characters = characters.concat(numbersArray);
    password = password + getRandomElement(numbersArray);
  }
  console.log(upperCase, lowerCase, specialChars, numbers);
  
// generate password
for(var i = password.length; i < passwordLength; i++) {
  password = password + getRandomElement(characters);
}
return password;
}
}

// create funtion that passes and array and returns a random element of that array
function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var textAreaElement = document.querySelector("#password");
  
  textAreaElement.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
