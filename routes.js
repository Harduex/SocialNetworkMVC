import express from 'express';

import indexController from './App/Controllers/indexController';
import { error404, view404 } from './App/Controllers/error404Controller';
import { addUser } from './App/Controllers/usersController';

const Router = express.Router();
const app = express();

Router.get('/', indexController);
Router.get('/addUser', addUser);

app.use('/', Router);
app.use(error404);
app.use(view404);

export default Router;
