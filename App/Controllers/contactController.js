import express from 'express';
const router = express.Router();
import nodemailer from 'nodemailer';

import { checkAuthenticated } from '../../config/middlewares/authenticate.js';


router.get('/', checkAuthenticated, async (req, res) => {
    const user = await req.user;

    res.render('contact', {
        title: `Contact Us!`,
        user: user,
    });

});

router.post('/', async (req, res) => {
    const user = await req.user;

    const {
        name,
        email,
        phone,
        subject,
        message
    } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_FROM || '',
            pass: process.env.EMAIL_PASS || ''
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_TO,
        subject: subject,
        text: message,
        html: `
        <p>Username: ${user.username}<p>
        <p>Name: ${name}<p>
        <p>Email: ${email}<p>
        <p>Phone: ${phone}<p>
        <p>Message: ${message}<p>
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            res.render('error');
        } else {
            res.render('contactSuccess', {
                title: `Message Sent!`,
                user: user,
            });
        }
    });

});


export default router;
