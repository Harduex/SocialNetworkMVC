import express from 'express';
const router = express.Router();

import { searchUser } from '../Models/userModel';


router.get('/', async (req, res) => {
    const currentUser = await req.user;
    const searchResults = await searchUser(req.query.keyword, 'username fullName profilePic coverColor');

    res.render('searchResults', {
        currentUser: currentUser,
        searchResults: searchResults,
    });
});

router.post('/', async (req, res) => {
    const searchResults = await searchUser(req.body.keyword, 'username');

    res.json({ keyword: req.body.keyword, results: searchResults });
});


export default router;
