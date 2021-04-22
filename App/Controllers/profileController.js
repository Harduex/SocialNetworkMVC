import express from 'express';
const router = express.Router();


router.get('/', async (req, res) => {
    const user = await req.user;
    res.render('profile', { title: 'Profile', user: user });
});

router.get('/edit', async (req, res) => {
    const user = await req.user;
    res.render('editProfile', { title: 'Profile', user: user });
});


export default router;
