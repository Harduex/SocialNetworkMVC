import express from 'express';
const router = express.Router();

import { checkAuthenticated } from '../helpers/middlewares/authenticate.js';
import { getPostsByArray } from '../Models/postModel.js';
import { getUsersByArray, getRandomUsersArray } from '../Models/userModel.js';


router.get('/', checkAuthenticated, async (req, res) => {
    const user = await req.user;

    const following = user.following;
    const followingFull = await getUsersByArray(following);

    const posts = await getPostsByArray(followingFull, 5);
    const randomUsers = await getRandomUsersArray(10);

    res.render('index', {
        title: `${user.username}'s Feed`,
        user: user,
        randomUsers: randomUsers,
        currentUser: user,
        posts: posts,
        hideButtons: true,
    });

});

// Ajax
router.post('/posts', checkAuthenticated, async (req, res) => {
    const user = await req.user;

    const following = user.following;
    const followingFull = await getUsersByArray(following);

    const limit = 5;
    let page = req.body.page;

    const posts = await getPostsByArray(followingFull, limit * 1, (page - 1) * limit);

    res.render('./components/posts', {
        currentUser: user,
        posts: posts,
    });

});



export default router;
