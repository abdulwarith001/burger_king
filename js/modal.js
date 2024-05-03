// Get the modal, input, send button, and chat container
const modal = document.getElementById("myModal");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const chatContainer = document.getElementById("chatContainer");
const span = document.getElementById("close");
const baseUrl = "https://chatterbot-ordering-fastapi.onrender.com"

// Function to add a message to the chat container
function addMessage(sender, message, isUser) {
  const messageDiv = document.createElement("div");
  const messageClass = isUser ? "user-message" : "bot-message";
  messageDiv.classList.add("chat-message");
  messageDiv.classList.add(messageClass);
  messageDiv.innerHTML = "<strong>" + sender + ": </strong>" + message;
  chatContainer.appendChild(messageDiv);
  // Scroll to the bottom of the chat container
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Function to handle user input
async function handleUserInput() {
  const userMessage = userInput.value.trim();
  if (userMessage !== "") {
    addMessage("You", userMessage, true);
    const payload = {
      user_input: userMessage
    }
     const res = await axios.post(`${baseUrl}/chat`, payload);
    // Here you could send the user's message to a server for processing by a bot,
    // and then receive and display the bot's response.
    // For this example, let's simulate a bot response after a short delay
      addMessage("Bot", res.data.response, false);

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
