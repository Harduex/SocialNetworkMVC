import express from 'express';
const router = express.Router();
import bcrypt from 'bcrypt';
import multer from 'multer';
import fs from 'fs';
const upload = multer({ dest: './public/temp' });

import { editUser } from '../Models/usersModel';

router.get('/', async (req, res) => {
    const user = await req.user;
    res.render('profile', { title: 'Profile', user: user });
});

router.get('/edit', async (req, res) => {
    const user = await req.user;
    res.render('editProfile', { title: 'Profile', user: user });
});

router.post('/edit', upload.single('profilePic'), async (req, res) => {
    const user = await req.user;
    const currentUserId = user._id;
    const currentUserPassword = user.password;
    const currentUserProfilePic = user.profilePic;

    const {
        // profilePic,
        name,
        username,
        email,
        bio,
        currentPassword,
        newPassword,
        newPasswordConfirm
    } = req.body;

    let profilePic;

    // Convert profile picture to base64
    if (!req.file || !req.file.path) {
        profilePic = currentUserProfilePic;
    } else {
        var img = fs.readFileSync(req.file.path);
        profilePic = img.toString('base64');
        fs.unlinkSync(req.file.path);
    }

    // Update password
    if (currentPassword !== '' && newPassword !== '' && newPasswordConfirm !== '') {
        if (await bcrypt.compare(currentPassword, currentUserPassword) && newPassword === newPasswordConfirm) {
            const NewHashedPassword = await bcrypt.hash(newPassword, 10);
            const updates = {
                profilePic: profilePic,
                username: username,
                fullName: name,
                email: email,
                password: NewHashedPassword,
                bio: bio,
            }

            editUser(currentUserId, updates);

            res.redirect('/auth/logout');

        } else {
            res.send('wrong password');
        }
    } else {

        const updates = {
            profilePic: profilePic,
            username: username,
            fullName: name,
            email: email,
            bio: bio,
        }

        editUser(currentUserId, updates);

        res.redirect('/profile');
    }


});


export default router;
