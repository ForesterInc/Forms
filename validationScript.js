// JavaScript code for form validation
  // Retrieve the input field value
let inputField = document.getElementById('inputField');
let form = document.getElementById('myForm');
let errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
  // Prevent form from submitting
  if (!validateInput()) {
    event.preventDefault();
  }

});

function validateInput() {
  // Check if the input value matches the pattern
  const inputValue = inputField.value;
  // Regular expression pattern for alphanumeric input
  const alphanumericRegex = /^[a-zA-Z0-9]+$/;

  if (alphanumericRegex.test(inputValue)) {
    // Valid input: display confirmation and submit the form
    form.submit();
    alert(`Input ${inputValue} is valid!`);
  } else {
    // Invalid input: display error message
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'Invalid input. Please enter a alphanumeric character.';
  }
}
