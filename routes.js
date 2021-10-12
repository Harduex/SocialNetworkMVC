import indexController from './App/Controllers/indexController.js';
import authenticationRouter from './App/Controllers/authenticationController.js';
import profileRouter from './App/Controllers/profileController.js';
import userRouter from './App/Controllers/usersController.js';
import postRouter from './App/Controllers/postsController.js';
import searchRouter from './App/Controllers/searchController.js';
import contactRouter from './App/Controllers/contactController.js';

import { checkAuthenticated, checkNotAuthenticated } from './App/helpers/middlewares/authenticate.js';

const routes = (app) => {
    app.use('/', indexController);
    app.use('/auth', authenticationRouter);
    app.use('/profile', checkAuthenticated, profileRouter);
    app.use('/user', checkAuthenticated, userRouter);
    app.use('/post', checkAuthenticated, postRouter);
    app.use('/search', checkAuthenticated, searchRouter);
    app.use('/contact', checkAuthenticated, contactRouter);
}


export default routes;