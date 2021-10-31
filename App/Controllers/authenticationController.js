import express from 'express';
const router = express.Router();

import bcrypt from 'bcrypt';
import passport from 'passport';
import { User } from '../Models/userModel.js';
import { createAvatar } from '@dicebear/avatars';
import * as avatarStyle from '@dicebear/avatars-jdenticon-sprites';
import path from 'path';
import fs from 'fs';
import { uploadImage, deleteImage } from '../helpers/utilities/general';

import { checkAuthenticated, checkNotAuthenticated } from '../helpers/middlewares/authenticate.js';
import { generateRandomHexColor } from '../helpers/utilities/general.js';


router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register', { message: 'Registration' });
});
router.post('/register', checkNotAuthenticated, async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    let profilePicSvg = createAvatar(avatarStyle);
    let profilePic = '';
    // let tempDir = 'public/temp';
    let tempDir = path.join(__dirname, '../../public/temp');
    let profilePicName = 'profilePic.svg';
    let fullPath = `${tempDir}/${profilePicName}`;

    if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir)
    }

    fs.writeFileSync(fullPath, profilePicSvg);

    if (fs.existsSync(fullPath)) {
        profilePic = await uploadImage(fullPath);
    }

    let coverColor = generateRandomHexColor();

    const user = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashedPassword,
        profilePic: profilePic,
        coverColor: coverColor,
    });

    user.save()
        .then((data) => {
            res.render('login', { message: 'User added' });
        })
        .catch((err) => {
            let message = '';

            if (err.message.includes('email')) {
                message = "Email field is required"
            }
            if (err.message.includes('username')) {
                message = "Username already exists"
            }

            res.render('register', { message: message });
        });
});

router.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login', { message: 'Login' });
});
router.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true
}));

router.get('/logout', checkAuthenticated, (req, res) => {
    req.logOut();
    res.redirect('/auth/login');
});


export default router;