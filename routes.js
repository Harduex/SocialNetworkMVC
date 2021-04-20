import indexController from './App/Controllers/indexController';
import authenticationRouter from './App/Controllers/authenticationController';

// import { checkAuthenticated, checkNotAuthenticated } from './config/middlewares/authenticate';

const routes = (app) => {
    app.use('/', indexController);
    app.use('/auth', authenticationRouter);
}


export default routes;