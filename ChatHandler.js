Send_Message(false, "Hei! Hva kan jeg hjelpe deg med?");

Send_Options("HTML");
Send_Options("CSS");
Send_Options("Javascript");

function Send_Options(name, human) {
    if (name && !human) {
        var chatBox = document.getElementById("chat-box");
        var newOption = document.createElement("button");

        newOption.textContent = name;
        newOption.classList.add("option-button");

        newOption.style.padding = "0.5em 1em";
        newOption.style.fontSize = "12px";
        newOption.style.width = "auto";
        newOption.style.minWidth = "10%";
        newOption.style.overflow = "hidden";
        newOption.style.textOverflow = "ellipsis";
        newOption.style.whiteSpace = "nowrap";
        newOption.style.margin = "0 0 0 10px";

        newOption.addEventListener("click", function () {
            alert("Du klikket på " + name);
        });

        chatBox.appendChild(newOption);
    }
}

// Message sending

function Send_Message(human, message) {
    if(human && message == "") {
        var userInput = document.getElementById("user-input").value;
        if (userInput !== "") {
            Upload_Message(userInput, human);
            document.getElementById("user-input").value = "";
        }

    } else if(message != "") {
        Upload_Message(message, human);
    }
}

// Enter keycheck

document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        Send_Message(true, "");
    }
});



// Upload messages
  
function Upload_Message(message, human) {
    var chatBox = document.getElementById("chat-box");
    var newMessage = document.createElement("div");

    newMessage.classList.add(human ? "user-message" : "bot-message");

    newMessage.textContent = (human ? "" : "Scott: ") + message;

    chatBox.appendChild(newMessage);
}

  