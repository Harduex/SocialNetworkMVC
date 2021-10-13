import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import multer from 'multer';
import fs from 'fs';
const upload = multer({ dest: './public/temp' });

import { editUser, getUsersByArray } from '../Models/userModel.js';
import { getAllPostsByUser, getPostsCount } from '../Models/postModel.js';
import { compressImage } from '../helpers/utilities/general.js';

router.get('/', async (req, res) => {
    const user = await req.user;

    const followers = user.followers;
    const followersFull = await getUsersByArray(followers);

    const following = user.following;
    const followingFull = await getUsersByArray(following);

    const posts = await getAllPostsByUser(user, 5);
    const postsCount = await getPostsCount(user);

    res.render('profile', {
        title: `${user.username}'s Profile`,
        user: user,
        currentUser: user,
        followers: followersFull,
        following: followingFull,
        posts: posts,
        postsCount: postsCount,
    });
});

// Ajax
router.post('/', async (req, res) => {
    const user = await req.user;
    const limit = 5;
    let page = req.body.page;

    const posts = await getAllPostsByUser(user, limit * 1, (page - 1) * limit);

    res.render('./components/posts', {
        user: user,
        currentUser: user,
        posts: posts,
        loggedIn: true,
    });

});


router.get('/edit', async (req, res) => {
    const user = await req.user;
    res.render('editProfile', { title: 'Edit Profile', user: user });
});

router.post('/edit', upload.single('profilePic'), async (req, res) => {
    const user = await req.user;
    const currentUserId = user._id;
    const currentUserPassword = user.password;
    const currentUserProfilePic = user.profilePic;

    const {
        fullName,
        username,
        email,
        bio,
        currentPassword,
        newPassword,
        newPasswordConfirm,
        coverColor
    } = req.body;

    let profilePic;

    // Convert profile picture to base64
    if (!req.file || !req.file.path) {
        profilePic = currentUserProfilePic;
    } else {
        const compressedImg = await compressImage(req.file.path);
        profilePic = `data:image/jpeg;base64,${compressedImg.toString('base64')}`;
        fs.unlinkSync(req.file.path);
    }

    // Update password
    if (currentPassword !== '' && newPassword !== '' && newPasswordConfirm !== '') {
        if (await bcrypt.compare(currentPassword, currentUserPassword)) {
            if (newPassword !== newPasswordConfirm) {
                res.render('editProfile', { title: 'Edit Profile', passwordError: `Passwords don't match!`, user: user });
                return;
            }
            const NewHashedPassword = await bcrypt.hash(newPassword, 10);
            const updates = {
                profilePic: profilePic,
                username: username,
                fullName: fullName,
                email: email,
                password: NewHashedPassword,
                bio: bio,
                coverColor: coverColor,
            }

            const result = await editUser(currentUserId, updates);
            res.redirect('/auth/logout');
        } else {
            res.render('editProfile', { title: 'Edit Profile', passwordError: `Wrong password!`, user: user });
        }
    } else {
        // Update only user info
        const updates = {
            profilePic: profilePic,
            username: username,
            fullName: fullName,
            email: email,
            bio: bio,
            coverColor: coverColor,
        }
        try {
            const result = await editUser(currentUserId, updates);
        } catch (err) {
            if (err) {
                res.render('editProfile', {
                    title: 'Username Already Exist',
                    user: user,
                    error: 'Username already exist'
                });
            }
        }

        res.redirect('/profile/edit');
    }
});


export default router;
