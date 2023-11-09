Send_Message(false, "Hei! Hva kan jeg hjelpe deg med?");

// Message sending

function Send_Message(human, message) {
    if(human && message == "") {
        var userInput = document.getElementById("user-input").value;
        if (userInput !== "") {
            Upload_Message("Du: " + userInput);
            document.getElementById("user-input").value = "";
        }

    } else if(message != "") {
        Upload_Message("Bot: " + message);
    }
}

// Upload messages
  
function Upload_Message(message) {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");

    newMessage.textContent = message;
    chatBox.appendChild(newMessage);
}
  