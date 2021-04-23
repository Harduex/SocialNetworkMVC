import express from 'express';
const router = express.Router();

import { checkAuthenticated } from '../../config/middlewares/authenticate';
import { getPostsByArray } from '../Models/postModel';


router.get('/', checkAuthenticated, async (req, res) => {
    const user = await req.user;

    const following = user.following;
    const posts = await getPostsByArray(following);

    // let fullPosts = await Promise.all(posts.map(async (post) => (
    //     { ...post, user: await getUserByUsername(post.user) }
    // )));

    // console.log(fullPosts);

    res.render('index', {
        title: `${user.username}'s Feed`,
        user: user,
        currentUser: user,
        posts: posts,
    });

});


export default router;
