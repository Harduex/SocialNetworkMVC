import { chatSocket } from './App/Controllers/chatController.js';


const sockets = (io) => {
    chatSocket(io);
}


export default sockets;