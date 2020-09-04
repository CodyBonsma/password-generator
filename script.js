// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
  var lowerCaseOpt = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseOpt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numberOpt = "1234567890";
  var specialCharacterOpt = "!@#$%^&*()_<>?";


// Ask for password length with a prompt
var passwordLength = prompt(
  "Please enter a character amount between 8 and 128 for your password"
);
console.log(passwordLength);
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Please choose a number between 8 and 128");
  // and bring user back to the beginning prompt
} else {
  //  ask the user to hit OK or cancel for lowercase
  var includeLowerCase = confirm(
    "Click OK to include lowercase letters into your password"
  );
  //  ask the user to hit OK or cancel for uppercase
  var includeUpperCase = confirm(
    "Click OK to include uppercase letters into your password"
  );
  //  ask the user to hit OK or cancel for numbers
  var includeNumbers = confirm(
    "Click OK to include numbers into your password"
  );
  //  ask the user to hit OK or cancel for special characters
  var includeSpecial = confirm(
    "Click OK to include special characters into your password"
  );
}
// this will be the generated password after checking the confirm statements
var generatedPassword = ""; 
//  checking for confirm statements and adding to the generatedPassword
if(includeLowerCase === true){
  alert("Your password will include lowercase letters!");
  generatedPassword = generatedPassword.concat(lowerCaseOpt);
  console.log(generatedPassword);
}

if(includeUpperCase === true){
  alert("Your password will include uppercase letters!");
  generatedPassword = generatedPassword.concat(upperCaseOpt)
  console.log(generatedPassword)
}

if(includeNumbers === true){
  alert("Your password will include numbers!");
  generatedPassword = generatedPassword.concat(numberOpt);
  console.log(generatedPassword);
}

if(includeSpecial === true){
  alert("Your password will include special characters!");
  generatedPassword = generatedPassword.concat(specialCharacterOpt);
  console.log(generatedPassword);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
