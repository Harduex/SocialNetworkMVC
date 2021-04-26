import express from 'express';
const router = express.Router();

import { checkAuthenticated } from '../../config/middlewares/authenticate';
import { getPostsByArray } from '../Models/postModel';
import { getUsersByArray } from '../Models/userModel';


router.get('/', checkAuthenticated, async (req, res) => {
    const user = await req.user;

    const following = user.following;
    const followingFull = await getUsersByArray(following);

    const posts = await getPostsByArray(followingFull, 10);

    res.render('index', {
        title: `${user.username}'s Feed`,
        user: user,
        currentUser: user,
        posts: posts,
    });

});

// Ajax
router.post('/posts', async (req, res) => {
    const user = await req.user;

    const following = user.following;
    const followingFull = await getUsersByArray(following);

    const posts = await  getPostsByArray(followingFull, Number(req.body.count));

    res.render('./components/posts',{
        currentUser: user,
        posts: posts,
    });

});



export default router;
