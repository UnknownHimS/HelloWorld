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
    const complimentlooks = [
      "gorgeous", "stunning", "radiant", "beautiful", "elegant", "flawless", "breathtaking",
      "lovely", "alluring", "charming", "graceful", "dazzling", "mesmerizing", "glowing",
      "attractive", "exquisite", "striking", "picturesque", "fabulous", "angelic",
      "Gorgeous", "Stunning", "Radiant", "Beautiful", "Elegant", "Flawless", "Breathtaking",
      "Lovely", "Alluring", "Charming", "Graceful", "Dazzling", "Mesmerizing", "Glowing",
      "Attractive", "Exquisite", "Striking", "Picturesque", "Fabulous", "Angelic", "Pretty", "pretty", "Handsome", "handsome", "Cool", "cool"
    ];
    const toxicwords = [
      "ugly", "fat", "poor", "stupid", "idiot", "loser", "worthless", "disgusting", "failure", "dumb",
      "hate", "lazy", "gross", "pathetic", "repulsive", "annoying", "useless", "weak", "helpless",
      "unattractive", "fatty", "embarrassing", "freak", "loser", "desperate"
  ]
  
    const you = ["You", "you", "Your", "your", "You're", "you're"];
    const greetings = [
      "hey", "hi", "hello", "howdy", "yo", "sup", "hola", "bonjour", "aloha", "hiya", 
      "greetings", "salutations", "what'sup", "wassup", "yo", "how", "morning", "evening", "night"
    ];
    const firstPersonPronouns = [
      "i", "me", "my", "mine", "myself", "we", "our", "ours", "ourselves"
    ];
    
    
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
      else if (greetings.some(greet => message.toLowerCase().includes(greet))) {
      response = "hello, how can i assist you today?";
      } else if (message.toLowerCase().includes("your name")) {
        response = "I am your assistant!";
      } else if (message.toLowerCase().includes("how are you")) {
        response = "I'm just a program, but thanks for asking!";
      } else if (message.toLowerCase().includes("what is the time") || message.toLowerCase().includes("time?")) {
        response = "The current time is " + new Date().toLocaleTimeString();
      } else if (message.toLowerCase().includes("what is your purpose")) {
        response = "I'm here to assist you with basic tasks.";
      } else if (message.toLowerCase().includes("do you") && message.toLowerCase().includes("friends")){
        response = "Yes, i do have friends their name are Ran, Roy, Jc, Ver, Allen, Hannah, Renalyn, Princess, Apple and etc.";}
        else if (message.toLowerCase().includes("are you") && message.toLowerCase().includes("handsome")){
        response = "Nahh Im ugly asf.";}
        else if (complimentlooks.some(words => message.includes(words)) && you.some(your => message.includes(your))){
        response = "Thankyou, that's sweet🥰";
        }
        else if (complimentlooks.some(words => message.includes(words)) && firstPersonPronoun.some(i => message.toLowerCase().includes(i))){
          response = "ofcourse, you are 🥰";
        }
        else if (toxicwords.some(toxic => message.toLowerCase().includes(toxic)) && you.some(your => message.includes(your))){
        response = "you're ugly anyway";
        }
        else if (message.toLowerCase().replace(/\s+/g, "").replace(/'/g, "").includes("idontunderstand")) {
        response = "I'm sorry, I am not skilled enough to understand every text you send because I am just starting this website.";
      }
      
      
      
      // Simulate assistant's response after a slight delay
      setTimeout(function() {
        displayMessage(response, 'assistant'); // Display assistant's response in the chat
      }, 1000);
    };
  });
  
  
