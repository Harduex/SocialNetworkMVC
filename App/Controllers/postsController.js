import express from 'express';
import multer from 'multer';
const router = express.Router();
const upload = multer({ dest: './public/temp' });
import fs from 'fs';
import sharp from 'sharp';

import { addPost, getPostById, likePost, dislikePost, commentPost, getPostByIdFull } from '../Models/postModel';
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

    // res.render('./components/likesCounter',
    //     {
    //         post: post
    //     });

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
            post: post
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
        // let img = fs.readFileSync(req.file.path);
        // image = img.toString('base64');
        // fs.unlinkSync(req.file.path);

        const compressedImg = await compressImage(req.file.path);
        image = compressedImg.toString('base64');
        fs.unlinkSync(req.file.path);
    }

    const post = await addPost(req.body.body, user, req.body.comments, req.body.likes, image);

    res.redirect(`/post/get/${post._id}`);
});


function compressImage(img) {

    return sharp(img)
        .resize({
            height: 720,
            fit: sharp.fit.contain,
            position: sharp.strategy.entropy
        })
        .toBuffer();
}


export default router;
