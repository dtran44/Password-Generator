// Variable defintions

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];



// Get the button element from the HTML
var button = document.querySelector('button');

// Add an event listener to the button that listens for the click event
button.addEventListener('click', function() {

  // Display the prompt when the button is clicked
  var passwordLength = parseInt(prompt('What is the length of your password? (Min 8 Max 126)'));
  console.log(passwordLength)
  // If password length is not a number or does not meet min & max length, show an alert to the user and return
  if (isNaN(passwordLength) || passwordLength<8 || passwordLength>126 ) 
  {window.alert("Password does not meet requirements. Try again"); 
    return;
  }
  // If password length is a number or meets the min & max length, ask the user for preference of lowercase, uppercase, numeric and/or special characters
  else 
  {var userInputLower = confirm('Do you want to include lowercase?')
  var userInputUpper = confirm('Do you want to include uppercase?')
  var userInputNumeric = confirm('Do you want to include numeric?')
  var userInputSpecial = confirm('Do you want to include special characters?')
  }

  // If user does not select a preference, show an alert to the user and return
  if(!userInputLower && !userInputUpper && !userInputNumeric && !userInputSpecial)
  {window.alert("Please select at lease one preference!"); 
  return;
}

//create array using concat based on user's preference

var allChars = '';
if (userInputLower) {
  allChars += lowerCase;
}
if (userInputUpper) {
  allChars += uppercase;
}
if (userInputNumeric) {
  allChars += numeric;
}
if (userInputSpecial) {
  allChars += special;
}

var password = '';
for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * allChars.length);
  password += allChars[randomIndex];
}

})

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// using a for loop - pick up from the concat , password += a
