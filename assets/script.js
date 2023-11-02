// Variable defintions

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numeric = '0123456789';
var special = '@%+\\/' + "'!#$^?:,)(}{][~`-_.";


// Get the button element from the HTML
var generateBtn = document.querySelector("#generate");

// Add an event listener to the button that listens for the click event
generateBtn.addEventListener('click', writePassword);  


function writePassword() {
  // Display the prompt when the button is clicked
  var passwordLength = parseInt(prompt('What is the length of your password? (Min 8 Max 128)'));

  // If password length is not a number or does not meet min & max length, show an alert to the user and return
  if (isNaN(passwordLength) || passwordLength<8 || passwordLength>128 ) {
    window.alert("Password does not meet requirements. Try again"); 
    return;
  }
  // If password length is a number or meets the min & max length, ask the user for preference of lowercase, uppercase, numeric and/or special characters
  else {
  var userInputLower = confirm('Do you want to include lowercase?')
  var userInputUpper = confirm('Do you want to include uppercase?')
  var userInputNumeric = confirm('Do you want to include numeric?')
  var userInputSpecial = confirm('Do you want to include special characters?')
  }

  // If user does not select a preference, show an alert to the user and return
  if(!userInputLower && !userInputUpper && !userInputNumeric && !userInputSpecial){
  window.alert("Please select at lease one preference!"); 
  return;
}

//create array using concat based on user's preference

var array = [];

if (userInputLower) {
  array = array.concat(lowerCase);
}
if (userInputUpper) {
  array = array.concat(upperCase);
}
if (userInputNumeric) {
  array = array.concat(numeric);
}
if (userInputSpecial) {
  array = array.concat(special);
}

var allChars = array.join('');

// Use a loop and math random to create a random password based on the array
var password = '';
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allChars.length);
  password += allChars[randomIndex];
}

// Show the random password on the screen for the user
var passwordText = document.querySelector("#password");
passwordText.value = password;


}





