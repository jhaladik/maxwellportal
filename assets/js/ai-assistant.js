// AI Chat widget (stejný ve všech souborech)
function toggleAIChat() {
    const chat = document.getElementById('aiChat');
    chat.classList.toggle('open');
}

function sendAIMessage() {
    const input = document.getElementById('aiInput');
    const message = input.value.trim();
    if (message) {
        addAIMessage(message, 'user');
        input.value = '';
        
        setTimeout(() => {
            const response = generateAIResponse(message);
            addAIMessage(response, 'ai');
        }, 1000);
    }
}

function handleAIInput(event) {
    if (event.key === 'Enter') {
        sendAIMessage();
    }
}

function addAIMessage(message, sender) {
    const chatBody = document.getElementById('aiChatBody');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'ai-message';
    messageDiv.style.background = sender === 'user' ? 'var(--primary-blue)' : 'var(--light-gray)';
    messageDiv.style.color = sender === 'user' ? 'white' : 'var(--dark-gray)';
    messageDiv.style.marginLeft = sender === 'user' ? '2rem' : '0';
    messageDiv.style.marginRight = sender === 'user' ? '0' : '2rem';
    messageDiv.textContent = message;
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Default AI response - override in page-specific JS
function generateAIResponse(message) {
    return 'Jsem Maxwell AI asistent. Jak vám mohu pomoci?';
}