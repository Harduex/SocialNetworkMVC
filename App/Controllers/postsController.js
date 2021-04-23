import express from 'express';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: './public/temp' });
import fs from 'fs';


import { Post, addPost, getAllPosts, getPostById, editPost, deletePostById, deleteAllPosts } from '../Models/postModel';
import { getUserByUsername } from '../Models/userModel';


router.get('/get/:id', async (req, res) => {
    const post = await getPostById(req.params.id);
    const postUser = await getUserByUsername(post.user);
    const currentUser = await req.user;

    res.render('post', {
        title: 'Post',
        post: post,
        user: postUser,
        currentUser: currentUser,
    });
});

router.get('/new', async (req, res) => {
    const user = await req.user;
    res.render('newPost', { title: 'New Post', user: user?.username });
});

router.post('/create', upload.single('postImage'), async (req, res) => {
    const user = await req.user;
    let image;

    if (!req.file || !req.file.path) {
        image = '';
    } else {
        let img = fs.readFileSync(req.file.path);
        image = img.toString('base64');
        fs.unlinkSync(req.file.path);
    }

    const post = await addPost(req.body.body, user.username, req.body.comments, req.body.likes, image);

    res.redirect(`/post/get/${post._id}`);
});

export default router;
