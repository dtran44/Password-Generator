// Assignment code here

// Get the button element from the HTML
var button = document.querySelector('button');

// Add an event listener to the button that listens for the click event
button.addEventListener('click', function() {
  // Display the prompt when the button is clicked
  var userInput = prompt('What is the length of your password? (Min 8 Max 126)');
  console.log(userInput);
});


