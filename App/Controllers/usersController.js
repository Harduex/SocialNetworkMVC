import express from 'express';
const router = express.Router();

import { getUserByUsername, getUserById, getUsersByArray, follow, unfollow } from '../Models/userModel';
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

    if (followers.includes(loggedUser._id)) {
        followText = 'unfollow';
    } else {
        followText = 'follow';
    }

    if (loggedIn) {
        res.redirect('/profile');
        return;
    }

    const posts = await getAllPostsByUser(searchedUser);


    res.render('profile', {
        title: `${searchedUser.username}'s Profile`,
        user: searchedUser,
        currentUser: loggedUser,
        loggedIn: false,
        follow: followText,
        followers: followersFull,
        following: followingFull,
        posts: posts,
    });

});

router.get('/follow/:username', async (req, res) => {
    const loggedUser = await req.user;
    const userToFollow = await getUserByUsername(req.params.username);


    if (userToFollow.followers.includes(loggedUser._id)) {
        await unfollow(userToFollow._id, loggedUser._id);
    } else {
        await follow(userToFollow._id, loggedUser._id);
    }

    res.redirect('back');
});


export default router;
