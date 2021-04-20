import express from 'express';
const router = express.Router();

import { checkAuthenticated } from '../../config/middlewares/authenticate';


router.get('/', checkAuthenticated, async (req, res) => {
    const user = await req.user;
    res.render('index', { title: 'Feed', user: user?.fullName || 'User' });
});


export default router;
