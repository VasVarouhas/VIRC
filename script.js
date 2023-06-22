document.addEventListener('DOMContentLoaded', () => {
const chatInput = document.getElementById('chatInput');
const chatScreen = document.getElementById('chatScreen');

// Function to handle the "Enter" key press event
function handleKeyPress(event) {
  if (event.keyCode === 13) {
    event.preventDefault(); // Prevent form submission

    const message = chatInput.value.trim(); // Get the trimmed value of the input

    if (message !== '') {
      displayMessage(message); // Call the function to display the message
      chatInput.value = ''; // Clear the input
    }
  }
}

// Function to display the message on the screen
function displayMessage(message) {
  const messageElement = document.createElement('div');
  messageElement.textContent = message;
  messageElement.classList.add('message');
  chatScreen.appendChild(messageElement);

  // Force a reflow to get the updated dimensions of the message element
  void messageElement.offsetWidth;

  // Check if the message overflows the available width
  if (messageElement.scrollWidth > messageElement.clientWidth) {
    messageElement.classList.add('wrap');
  }
  chatScreen.scrollTop = chatScreen.scrollHeight;
}
const clearButton = document.getElementById('clearButton');

// Add a click event listener to the clearButton
clearButton.addEventListener('click', function() {
  // Clear the content of the messageDiv
  chatScreen.innerHTML = '';
});
// Event listener for the "Enter" key press event
chatInput.addEventListener('keypress', handleKeyPress);});