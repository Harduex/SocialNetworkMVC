import express from 'express';
const router = express.Router();

import { getUserByUsername, getUsersByArray } from '../Models/userModel.js';


router.get('/', async (req, res) => {
    const user = await req.user;

    const following = user.following;
    const followingFull = await getUsersByArray(following);
    const chatUserUsername = req.query.username;

    res.render('chat', {
        title: `Chat`,
        user: user,
        chatUserUsername: chatUserUsername,
        following: followingFull,
    });

});

router.get('/room', async (req, res) => {
    const user = await req.user;

    const following = user.following;
    const followingFull = await getUsersByArray(following);
    const chatUserUsername = req.query.username;
    const chatUser = await getUserByUsername(chatUserUsername);


    res.render('chatRoom', {
        title: `Chat`,
        user: user,
        chatUser: chatUser,
        following: followingFull,
    });

});


const chatSocket = (io) => {

    io.on('connection', (socket) => {
        console.log('Chat Socket Connected.');

        socket.emit('message', 'Welcome to chat');

        socket.broadcast.emit('message', 'User has joined the chat');

        socket.on('disconnect', () => {
            io.emit('message', 'User left the chat');
        })
    })

}


export { chatSocket };
export default router;
