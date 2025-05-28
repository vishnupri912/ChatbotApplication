let chatbotMsgList = {
    "hi": "Hello!",
    "hello": "Hi there!",
    "how are you": "I'm a bot, so I'm always good!",
    "what is your name": "I'm your friendly chatbot!",
    "good morning": "Good Morning! How can I assist you?",
    "good evening": "Good Evening! What can I help you with?",
    "thank you": "You're welcome!",
    "bye": "Goodbye! Have a great day!"
};
let chatContainerEle=document.getElementById("chatContainer");
let userInput=document.getElementById("inputUser");
let buttonId=document.getElementById("buttonId")
function sendMsgToChatbot(){
    let userInputEle=userInput.value.trim().toLowerCase();
    if(userInputEle===""){
        return;
    }
    let sendboxContain=document.createElement("div");
    sendboxContain.classList.add("msg-to-chatbotContain");
    chatContainerEle.appendChild(sendboxContain);

    let sendBoxMsg=document.createElement("span");
    sendBoxMsg.textContent=userInputEle;
    sendBoxMsg.classList.add("msg-to-chatbot");
    sendboxContain.appendChild(sendBoxMsg);
    userInput.value="";
    getMsgFromChatbot(userInputEle);
}
function getMsgFromChatbot(userInputEle){
    let chatbotReply=chatbotMsgList[userInputEle];
    if(!chatbotReply){
        chatbotReply="I'm sorry, I didn't understand that. Can you please rephrase?";
    }
    let sendboxContainEle=document.createElement("div");
    sendboxContainEle.classList.add("msg-from-chatbot-container");
    chatContainerEle.appendChild(sendboxContainEle);

    let chatMsgToUser=document.createElement("span");
    chatMsgToUser.textContent=chatbotReply;
    chatMsgToUser.classList.add("msg-from-chatbot");
    sendboxContainEle.appendChild(chatMsgToUser);
}