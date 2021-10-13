$(document).ready(function () {
    const socket = io();

    let username = document.getElementById('your-chat-user').textContent;
    let chatUsername = document.getElementById('chat-user').textContent;

    const chatForm = document.getElementById('chat-form');
    const chatMessages = document.querySelector('.chat-messages');

    // Join chatroom
    socket.emit('joinRoom', { username, chatUsername });

    // Message from server
    socket.on('message', (message) => {
        outputMessage(message);
        // Scroll down
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    // Message submit
    chatForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get message text
        let msg = e.target.elements.msg.value;
        let user = document.getElementById('your-chat-user').textContent;

        msg = msg.trim();

        if (!msg) {
            return false;
        }

        // Emit message to server
        socket.emit('chatMessage', {msg, user});

        // Clear input
        e.target.elements.msg.value = '';
        e.target.elements.msg.focus();
    });

    // Output message to DOM
    function outputMessage(message) {
        const div = document.createElement('div');
        div.classList.add('message');
        const p = document.createElement('p');
        p.classList.add('meta');
        p.innerText = message.username + ' ';
        p.innerHTML += `<span>${message.time}</span>`;
        div.appendChild(p);
        const para = document.createElement('p');
        para.classList.add('text-info');
        para.innerText = message.text;
        div.appendChild(para);
        document.querySelector('.chat-messages').appendChild(div);
    }
    
});

