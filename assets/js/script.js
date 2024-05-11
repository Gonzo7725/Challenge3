// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_-+=?/.,<>;:~/*+-'";

function generatePassword(){
  var savedPassword="";
  var passwordSize=prompt("Enter password length between 8 and 128")
  console.log(passwordSize)

  if(passwordSize >= 8 && passwordSize <= 128){
    var confirmLowerCaseLetters=confirm("Do you want lower case included in your password?");
    var confirmUpperCaseLetters=confirm("Do you want upper case included in your password?");
    var confirmNumbers=confirm("Do you want numbers included in your password?");
    var confirmSpecialCharacters=confirm("Do you want special characters included in your password?");

    for(var i=0; i < passwordSize; i++){
    
    if(confirmLowerCaseLetters  && savedPassword.length < passwordSize){
      var randomIndex=Math.floor(Math.random() * lowercaseLetters.length)

      savedPassword= savedPassword+lowercaseLetters[randomIndex]
      
    }

    if(confirmUpperCaseLetters  && savedPassword.length < passwordSize){
      var randomIndex=Math.floor(Math.random() * uppercaseLetters.length)

      savedPassword= savedPassword+uppercaseLetters[randomIndex]
    }

    if(confirmNumbers  && savedPassword.length < passwordSize){
      var randomIndex=Math.floor(Math.random() * numbers.length)

      savedPassword= savedPassword+numbers[randomIndex]
    }

    if(confirmSpecialCharacters  && savedPassword.length < passwordSize){
      var randomIndex=Math.floor(Math.random() * specialCharacters.length)

      savedPassword= savedPassword+specialCharacters[randomIndex]
    }
   }
  }
  else{
    alert("Invalid Entry, Password length must be between 8 and 128");
  }

  return savedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
