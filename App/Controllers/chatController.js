import express from 'express';
const router = express.Router();
import moment from 'moment';

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
        console.log(`Chat Socket Connected - ${socket.id}`);

        socket.on('joinRoom', async ({ username, chatUsername }) => {

            const currUser = await getUserByUsername(username);
            const chatUser = await getUserByUsername(chatUsername);

            const uniqueRoom1 = `${currUser._id}${chatUser._id}`;
            const uniqueRoom2 = `${chatUser._id}${currUser._id}`;

            // console.log(uniqueRoom1, uniqueRoom2);

            socket.join(uniqueRoom1);
            socket.join(uniqueRoom2);

            //Welcome current user
            socket.emit('message', {
                username: 'Server',
                text: 'Welcome to the chat',
                time: moment().format('h:mm a')
            });

            //When user connect
            socket.broadcast.to(uniqueRoom1).to(uniqueRoom2).emit('message', {
                username: 'Server',
                text: `${username} has joined the chat`,
                time: moment().format('h:mm a')
            });

            //Listen for chat message
            socket.on('chatMessage', ({ msg, user }) => {

                io.to(uniqueRoom1).to(uniqueRoom2).emit('message', {
                    username: user,
                    text: msg,
                    time: moment().format('h:mm a')
                });
            })

            //When user disconnect
            socket.on('disconnect', () => {
                io.to(uniqueRoom1).to(uniqueRoom2).emit('message', {
                    username: 'Server',
                    text: `${username} left the chat`,
                    time: moment().format('h:mm a')
                });
            });

        });

    });

}


export { chatSocket };
export default router;
