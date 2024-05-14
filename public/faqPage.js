function toggleAnswer(element) {
    var answer = element.nextElementSibling;
    answer.classList.toggle('show');
}

// Define a function to process user input and generate responses
function processInput(input) {
    // Convert input to lowercase for case-insensitive matching
    input = input.toLowerCase();

    // Predefined responses for specific questions
    switch (input) {
        case 'how are you':
            return 'I am bad.'
        case 'Can you help me':
            return 'No.'
        case 'Who is the president':
            return 'Joe Biden.'
        default:
            return 'Sorry I dont understand the question.';
    }
}

// Define a function to display messages in the chat
function displayMessage(sender, message) {
    const chat = document.getElementById('chat');
    const p = document.createElement('p');
    p.textContent = `${sender}: ${message}`;
    chat.appendChild(p);
}

// Define a function to handle sending messages
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value.trim();

    if (message !== '') {
        // Display user message
        displayMessage('You', message);

        // Process user input and generate response
        const response = processInput(message);

        // Display ChatBot's response
        displayMessage('ChatBot', response);

        // Clear input field
        userInput.value = '';
    }
}
