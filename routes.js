import express from 'express';

// /
import indexController from './App/Controllers/indexController';
// on error
import { error404, view404 } from './App/Controllers/error404Controller';
// /auth
import authenticationRouter from './App/Controllers/authenticationController';
import { checkAuthenticated, checkNotAuthenticated } from './config/middlewares/authenticate';

const router = express.Router();
const app = express();


export default (app) => {

    // index routes
    app.use('/', indexController);
    app.use('/auth', authenticationRouter);

    // Authentication routes
    // router.get('/auth/register', checkNotAuthenticated, RegisterView);
    // router.post('/auth/register', checkNotAuthenticated, Register);

    // router.get('/auth/login', checkNotAuthenticated, LoginView);
    // router.post('/auth/login', checkNotAuthenticated, Login);

    // router.get('/auth/logout', checkAuthenticated, Logout);

    app.use(router);
}

// 404 error
app.use(error404);
app.use(view404);



// export default router;
