// Get the modal, input, send button, and chat container
var modal = document.getElementById("myModal");
var userInput = document.getElementById("userInput");
var sendBtn = document.getElementById("sendBtn");
var chatContainer = document.getElementById("chatContainer");
var span = document.getElementById("close");

// Function to add a message to the chat container
function addMessage(sender, message, isUser) {
  var messageDiv = document.createElement("div");
  var messageClass = isUser ? "user-message" : "bot-message";
  messageDiv.classList.add("chat-message");
  messageDiv.classList.add(messageClass);
  messageDiv.innerHTML = "<strong>" + sender + ": </strong>" + message;
  chatContainer.appendChild(messageDiv);
  // Scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to handle user input
function handleUserInput() {
  var userMessage = userInput.value.trim();
  if (userMessage !== "") {
    addMessage("You", userMessage, true);
    // Here you could send the user's message to a server for processing by a bot,
    // and then receive and display the bot's response.
    // For this example, let's simulate a bot response after a short delay.
    setTimeout(function () {
      addMessage(
        "Bot",
        "Hello! I'm just a simple bot. How can I help you?",
        false
      );
    }, 1000);
    userInput.value = ""; // Clear the input field after sending the message
  }
}

// When the user clicks the button, open the modal
openModalBtn.onclick = function () {
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
};

// When the user clicks on <span> (x) or outside of the modal, close it (same as before)
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Send user message when Send button is clicked
sendBtn.onclick = function () {
  handleUserInput();
};

// Send user message when Enter key is pressed
userInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    handleUserInput();
  }
});
