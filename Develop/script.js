// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var specialChar = "!@#$%&'()*+,^-./:;<=>?[]_`{~}|".split("");
var numeric ="0123456789".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


// Create password based off user input
function generatePassword(){
  var numOfChar = prompt("How many Characters would you like? Between 8 -128 characters", "how long do you want it");
  if (numOfChar < 8 || numOfChar > 128 ){
    alert("Please insert a number between 8 to 128")
  }else if (isNaN(numOfChar)){
    alert("Pick a damn Number please!!")
  }else {
  

    var passwordChar = [];
    
    var addupperCase = confirm("Would you like to include uppercase?");
    var addlowerCase = confirm("Would you like to include lowercase?");
    var addspecialChar = confirm("Would you like to include special?");
    var addnumeric = confirm("Would you like to include numeric?");

    if (!addupperCase && !addlowerCase && !addspecialChar && !addnumeric){
      return " You must choose some character";
    }

    if (addlowerCase){ passwordChar.push (...lowerCase)}
    if (addupperCase) {passwordChar.push (...upperCase)}
    if (addspecialChar) {passwordChar.push (...specialChar)}
    if (addnumeric) {passwordChar.push (...numeric)}

    var finalPassword = "";
    for (var i = 0; i < numOfChar; i++) {
      var randomChar = passwordChar[Math.floor(Math.random() * passwordChar.length)];
      finalPassword  += randomChar;
    }
    return finalPassword;
    
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


