document.addEventListener('DOMContentLoaded', function() {
    // Grab elements by their ids
    const userInputField = document.getElementById('text');
    const submitButton = document.getElementById('submit');
    const messagesDiv = document.getElementById('answer');
  
    // Event listener for the submit button
    submitButton.addEventListener('click', function() {
      let userInput = userInputField.value; // Get user input
      
      if (userInput !== "") {
        
        
        displayMessage(userInput, 'user'); // Display user input
        processMessage(userInput); // Process input to generate response
        userInputField.value = ""; // Clear the input field
      }
    });
  
    // Event listener for pressing Enter key
    userInputField.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        submitButton.click(); // Simulate button click when Enter is pressed
      }
    });
  
    // Function to display messages (both user and assistant)
    function displayMessage(message, sender) {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('message');
      
      const labelDiv = document.createElement('div');
      labelDiv.classList.add('label');
      
      // Set label based on sender
      if (sender === 'user') {
        labelDiv.innerText = "You:";
        messageDiv.classList.add('user-message');
      } else {
        labelDiv.innerText = "AI:";
        messageDiv.classList.add('assistant-message');
      }
  
      messageDiv.innerText = message; // Set the text of the message
  
      // Append label and message together
      const messageWrapper = document.createElement('div');
      messageWrapper.classList.add('message-wrapper');
      messageWrapper.appendChild(labelDiv);
      messageWrapper.appendChild(messageDiv);
  
      // Append the message wrapper to the message container
      messagesDiv.appendChild(messageWrapper);
  
      // Auto-scroll to the latest message
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
    const mathexpress = /^[0-9+\-*/().\s]+$/;
    // Function to process the user's message and generate a response
    function processMessage(message) {
      let response = "Sorry, I don't understand that.";
        
        if(mathexpress.test(message)){
          try{
            let result = eval(message);

            response =`the result is: ${result}`;
          }
          catch(error){
            response = "Error evaluating expression", error;
          }
        }
        else if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
        response = "Hello! How can I assist you today?";
      } else if (message.toLowerCase().includes("your name")) {
        response = "I am your assistant!";
      } else if (message.toLowerCase().includes("how are you")) {
        response = "I'm just a program, but thanks for asking!";
      } else if (message.toLowerCase().includes("what is the time")) {
        response = "The current time is " + new Date().toLocaleTimeString();
      } else if (message.toLowerCase().includes("what is your purpose")) {
        response = "I'm here to assist you with basic tasks.";
      } else if (message.toLowerCase().includes("do you") && message.toLowerCase().includes("friends")){
        response = "Yes, i do have friends their name are Ran, Roy, Jc, Ver, Allen, Hannah, Renalyn, Princess, and etc.";}
        else if (message.toLowerCase().includes("are you") && message.toLowerCase().includes("handsome")){
        response = "Nahh Im ugly asf.";}
        
      // Simulate assistant's response after a slight delay
      setTimeout(function() {
        displayMessage(response, 'assistant'); // Display assistant's response in the chat
      }, 1000);
    };
  });
  