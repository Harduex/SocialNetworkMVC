import express from 'express';
const router = express.Router();

import { getUserByUsername, getUserById, getUsersByArray, follow, unfollow } from '../Models/userModel.js';
import { getAllPostsByUser, getPostsCount } from '../Models/postModel.js';


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
    const postsCount = await getPostsCount(searchedUser);


    res.render('userProfile', {
        title: `${searchedUser.username}'s Profile`,
        user: searchedUser,
        currentUser: loggedUser,
        follow: followText,
        followers: followersFull,
        following: followingFull,
        posts: posts,
        postsCount: postsCount,
    });

});

// Ajax
router.post('/load-more-posts', async (req, res) => {
    const searchedUser = await getUserByUsername(req.body.username);
    const loggedUser = await req.user;

    let page = await req.body.page;
    let limit = 5;
    const posts = await getAllPostsByUser(searchedUser, limit * 1, (page - 1) * limit);

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
        unfollow(userToFollow._id, loggedUser._id).then(() => {
            res.json({ username: userToFollow.username });
        })
    } else {
        follow(userToFollow._id, loggedUser._id).then(() => {
            res.json({ username: userToFollow.username });
        })
    }
});


export default router;
