let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];


let userInput = document.getElementById("userInput");
let chatContainer = document.getElementById("chatContainer");
let sendMsgBtn = document.getElementById("sendMsgBtn");
chatContainer.classList.add("d-flex", "flex-column");

function userMessage(userMsg) {
    let userMsgContainer = document.createElement("div");
    userMsgContainer.classList.add("msg-to-chatbot-container", "align-self-end");
    chatContainer.appendChild(userMsgContainer);

    let userMsgTag = document.createElement("p");
    userMsgTag.textContent = userMsg;
    userMsgTag.classList.add("msg-to-chatbot");
    userMsgContainer.appendChild(userMsgTag);
}

function botMessage(botMsg) {
    let botMsgContainer = document.createElement("div");
    botMsgContainer.classList.add("msg-from-chatbot-container", "align-self-start");
    chatContainer.appendChild(botMsgContainer);

    let botMsgTag = document.createElement("p");
    botMsgTag.textContent = botMsg;
    botMsgTag.classList.add("msg-from-chatbot");
    botMsgContainer.appendChild(botMsgTag);
}


sendMsgBtn.onclick = function() {
    let userMsg = userInput.value;
    let noOfChatBotMsgs = chatbotMsgList.length;
    let botMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatBotMsgs) - 1];
    userMessage(userMsg);
    botMessage(botMsg);
    userInput.value = "";

};