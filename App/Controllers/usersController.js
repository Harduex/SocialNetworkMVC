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

    const posts = await getAllPostsByUser(searchedUser, 5);


    res.render('userProfile', {
        title: `${searchedUser.username}'s Profile`,
        user: searchedUser,
        currentUser: loggedUser,
        follow: followText,
        followers: followersFull,
        following: followingFull,
        posts: posts,
    });

});

// Ajax
router.post('/load-more-posts', async (req, res) => {
    const searchedUser = await getUserByUsername(req.body.username);
    const posts = await getAllPostsByUser(searchedUser, Number(req.body.count));
    const loggedUser = await req.user;

    res.render('./components/posts', {
        user: searchedUser,
        currentUser: loggedUser,
        posts: posts,
    });
});

router.post('/follow/:username', async (req, res) => {
    const loggedUser = await req.user;
    const userToFollow = await getUserByUsername(req.params.username);

    if (userToFollow.followers.includes(loggedUser._id)) {
        const result = await unfollow(userToFollow._id, loggedUser._id);
        res.send(result);
    } else {
        const result = await follow(userToFollow._id, loggedUser._id);
        res.send(result);
    }
});


export default router;
