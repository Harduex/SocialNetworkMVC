import indexController from './App/Controllers/indexController';
import authenticationRouter from './App/Controllers/authenticationController';
import profileRouter from './App/Controllers/profileController';
import userRouter from './App/Controllers/usersController';
import postRouter from './App/Controllers/postsController';
import searchRouter from './App/Controllers/searchController';

import { checkAuthenticated, checkNotAuthenticated } from './config/middlewares/authenticate';

const routes = (app) => {
    app.use('/', indexController);
    app.use('/auth', authenticationRouter);
    app.use('/profile', checkAuthenticated, profileRouter);
    app.use('/user', checkAuthenticated, userRouter);
    app.use('/post', checkAuthenticated, postRouter);
    app.use('/search', checkAuthenticated, searchRouter);
}


export default routes;