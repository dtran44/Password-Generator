// Variable defintions

      var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      var numericChars = '0123456789';
      var specialChars = '!@#$%^&*()_+{}[]|:;"<>,.?/~';

// Get the button element from the HTML
var button = document.querySelector('button');

// Add an event listener to the button that listens for the click event
button.addEventListener('click', function() {
  // Display the prompt when the button is clicked
  var userInput = prompt('What is the length of your password? (Min 8 Max 126)');
  console.log(userInput);



  var userInput1 = confirm('Do you want to include lowercase?');
  console.log(userInput1);
  var userInput2 = confirm('Do you want to include uppercase?');
  console.log(userInput2);
  var userInput3 = confirm('Do you want to include numeric?');
  console.log(userInput3);
  var userInput4 = confirm('Do you want to include special characters?');
  console.log(userInput4);
 
});


