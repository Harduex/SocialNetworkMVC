import express from 'express';
const router = express.Router();

import { getUserByUsername, getUsersByArray, follow, unfollow } from '../Models/userModel';
import { getAllPostsByUser } from '../Models/postModel';


router.get('/', async (req, res) => {
    const loggedUser = await req.user;
    const searchedUser = await getUserByUsername(req.query.username);

    const loggedIn = (loggedUser.username === searchedUser.username);
    let followText;

    const followers = searchedUser.followers;
    const followersFull = await getUsersByArray(followers);

    const following = searchedUser.following;
    const followingFull = await getUsersByArray(following);

    if (followers.includes(loggedUser.username)) {
        followText = 'unfollow';
    } else {
        followText = 'follow';
    }

    if (loggedIn) {
        res.redirect('/profile');
        return;
    }

    const posts = await getAllPostsByUser(searchedUser.username);

    res.render('profile', {
        title: `${searchedUser.username}'s Profile`,
        user: searchedUser,
        currentUser: loggedUser,
        loggedIn: loggedIn,
        follow: followText,
        followers: followersFull,
        following: followingFull,
        posts: posts,
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

    res.redirect('back');
});


export default router;
