// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var passwordSize=prompt("Enter password length between 8 and 128")
  console.log(passwordSize)

  if(passwordSize >= 8 && passwordSize <= 128){
    var confirmLowerCase=confirm("Do you want lower case included in your password?");
    console.log(confirmLowerCase);

  }
  else{
    alert("Invalid Entry, Password length must be between 8 and 128");
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
