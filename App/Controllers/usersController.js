import express from 'express';
const router = express.Router();

import { getUserByUsername, follow, unfollow } from '../Models/userModel';


router.get('/', async (req, res) => {
    const loggedUser = await req.user;
    const searchedUser = await getUserByUsername(req.query.username);

    const loggedIn = (loggedUser.username === searchedUser.username);
    let followText;

    if (searchedUser.followers.includes(loggedUser.username)) {
        followText = 'unfollow';
    } else {
        followText = 'follow';
    }

    if (loggedIn) {
        res.redirect('/profile');
        return;
    }

    res.render('profile', {
        title: `${searchedUser.username}'s Profile`,
        user: searchedUser,
        currentUser: loggedUser,
        loggedIn: loggedIn,
        follow: followText,
    });

});

router.get('/follow/:username', async (req, res) => {
    const loggedUser = await req.user;
    const userToFollow = await getUserByUsername(req.params.username);

    if (userToFollow.followers.includes(loggedUser.username)) {
        await unfollow(userToFollow.username, loggedUser.username);
    } else {
        await follow(userToFollow.username, loggedUser.username);
    }

    res.redirect(`/user?username=${userToFollow.username}`);
});


export default router;
