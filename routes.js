import indexController from './App/Controllers/indexController';
import authenticationRouter from './App/Controllers/authenticationController';
import profileRouter from './App/Controllers/profileController';

import { checkAuthenticated, checkNotAuthenticated } from './config/middlewares/authenticate';

const routes = (app) => {
    app.use('/', indexController);
    app.use('/auth', authenticationRouter);
    app.use('/profile', checkAuthenticated, profileRouter);
}


export default routes;