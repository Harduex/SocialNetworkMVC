import express from 'express';
const router = express.Router();


router.get('/', async (req, res) => {
    const user = await req.user;
    res.render('index', { title: 'Feed', user: user?.fullName || 'User' });
});


export default router;
