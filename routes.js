import express from 'express';

import indexController from './App/Controllers/indexController';
import { addUser, getAllUsers, getUserByUsername, editUser, deleteUser, deleteAllUsers } from './App/Controllers/usersController';
import { error404, view404 } from './App/Controllers/error404Controller';


const router = express.Router();
const app = express();


// index routes
router.get('/', indexController);

// user routes
router.get('/users/add', addUser);
router.get('/users/get/:username', getUserByUsername);
router.get('/users/getAll', getAllUsers);
router.get('/users/edit/:username', editUser);
router.get('/users/delete/:username', deleteUser);
router.get('/users/deleteAll', deleteAllUsers);

// 404 error
app.use(error404);
app.use(view404);


export default router;
