import express from 'express';
const router = express.Router();

import { searchUser, getUserByUsername } from '../Models/userModel.js';
import { searchPosts } from '../Models/postModel.js';


router.get('/', async (req, res) => {
    const currentUser = await req.user;
    const searchResults = await searchUser(req.query.keyword, 'username fullName profilePic coverColor');

    res.render('searchResults', {
        keyword: req.query.keyword,
        currentUser: currentUser,
        searchResults: searchResults,
    });
});

router.post('/', async (req, res) => {
    const searchResults = await searchUser(req.body.keyword, 'username');

    res.json({ keyword: req.body.keyword, results: searchResults });
});

router.get('/hashtag/:keyword', async (req, res) => {
    const searchResults = await searchPosts(`#${req.params.keyword}`);
    const currentUser = await req.user;
    const postUser = await getUserByUsername(searchResults?.user?.username);


    res.render('index', {
        title: `Hashtag #${req.params.keyword}`,
        user: postUser,
        currentUser: currentUser,
        posts: searchResults,
        hideExploreSection: true,
        hideUpdater: true,
        hideButtons: true,
    });

});



export default router;
