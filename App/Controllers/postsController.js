import express from 'express';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: './public/temp' });
import fs from 'fs';
import { compressImage } from '../helpers/utilities/general.js';
import cloudinary from 'cloudinary';

import {
    addPost,
    getPostById,
    likePost,
    dislikePost,
    commentPost,
    getPostByIdFull,
    deletePostById,
    deletePostComment,
    editPostComment,
    editPost
} from '../Models/postModel.js';
import { getUserByUsername } from '../Models/userModel.js';


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

router.post('/likes/:id', async (req, res) => {
    const post = await getPostByIdFull(req.params.id);

    res.render('./components/postLikesContent', {
        title: 'Post Likes',
        post: post
    });

});

// Ajax
router.post('/like/:id', async (req, res) => {
    let post = await getPostById(req.params.id);
    const user = await req.user;

    // console.log(post.likes);

    if (post.likes.includes(user._id)) {
        await dislikePost(post._id, user._id);
    } else {
        await likePost(post._id, user._id);
    }

    // Get updated post
    post = await getPostById(req.params.id);

    res.json({
        likesCount: post.likes.length,
        id: post._id
    });


});

router.post('/comment/:id', async (req, res) => {
    let post = await getPostById(req.params.id);
    const user = await req.user;

    await commentPost(post._id, user._id, req.body.comment);

    // Get updated post
    post = await getPostById(req.params.id);

    res.render('./components/comments',
        {
            post: post,
            currentUser: user,
        });
});

router.post('/comment/delete/:id', async (req, res) => {
    const postId = req.body.postId;
    const commentId = req.params.id;
    // console.log(postId, commentId);
    let result = await deletePostComment(postId, commentId);
    res.json({ result: result, _id: commentId });
});

router.post('/comment/edit/:id', async (req, res) => {
    const postId = req.body.postId;
    const commentId = req.body.commentId;
    const comment = req.body.comment;

    let result = await editPostComment(postId, comment, commentId);
    res.json({ result: result });
});


router.post('/edit/:id', async (req, res) => {
    const postId = req.params.id;
    let result = await editPost(postId, { body: req.body.newValue });
    res.json({ result: result });
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
        await cloudinary.v2.uploader.upload(req.file.path, async (error, result) => {
            console.log(result, error);
            image = result;
            const post = await addPost(req.body.body, user, req.body.comments, req.body.likes, image);
            fs.unlinkSync(req.file.path);
        });

    }
    res.redirect(`/profile`);
});

router.post('/delete/:id', async (req, res) => {
    cloudinary.v2.uploader.destroy(req.body.image, async (error, result) => {
        console.log(result, error)
        const resultDelete = await deletePostById(req.params.id);
    });
    res.json({ _id: req.params.id });
});


export default router;
