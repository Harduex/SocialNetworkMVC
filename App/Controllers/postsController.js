import express from 'express';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: './public/temp' });
import fs from 'fs';


import { addPost, getPostById, likePost, dislikePost, commentPost } from '../Models/postModel';
import { getUserByUsername } from '../Models/userModel';


router.get('/get/:id', async (req, res) => {
    const post = await getPostById(req.params.id);
    const postUser = await getUserByUsername(post.user.username);
    const currentUser = await req.user;

    res.render('post', {
        title: 'Post',
        post: post,
        user: postUser,
        currentUser: currentUser,
    });
});

// Ajax
router.post('/like/:id', async (req, res) => {
    let post = await getPostById(req.params.id);
    const user = await req.user;


    if (post.likes.includes(user._id)) {
        await dislikePost(post._id, user._id);
    } else {
        await likePost(post._id, user._id);
    }

    // Get updated post
    post = await getPostById(req.params.id);

    res.render('./components/likesCounter',
        {
            post: post
        });


});

router.post('/comment/:id', async (req, res) => {
    const post = await getPostById(req.params.id);
    const user = await req.user;

    commentPost(post._id, user._id, req.body.comment);

    res.redirect('/');
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

    const post = await addPost(req.body.body, user, req.body.comments, req.body.likes, image);

    res.redirect(`/post/get/${post._id}`);
});

export default router;
