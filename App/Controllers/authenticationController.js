import express from 'express';
const router = express.Router();

import bcrypt from 'bcrypt';
import passport from 'passport';
import { User } from '../Models/userModel';

import { checkAuthenticated, checkNotAuthenticated } from '../../config/middlewares/authenticate';


router.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register', { message: 'Registration' });
});
router.post('/register', checkNotAuthenticated, async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = new User({
        username: req.body.username,
        fullName: req.body.fullName,
        password: hashedPassword,
    });

    user.save()
        .then((data) => {
            res.render('login', { message: 'User added' });
        })
        .catch((err) => {
            res.render('register', { message: 'User already exist' });
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