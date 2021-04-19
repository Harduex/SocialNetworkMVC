import express from 'express';

// /
import indexController from './App/Controllers/indexController';
// /users
import { addUser, getAllUsers, getUserByUsername, editUser, deleteUser, deleteAllUsers } from './App/Controllers/usersController';
// on error
import { error404, view404 } from './App/Controllers/error404Controller';
// /auth
import { RegisterView, LoginView, Register, Login, Logout, checkAuthenticated, checkNotAuthenticated } from './App/Controllers/authenticationController';

const router = express.Router();
const app = express();


// index routes
router.get('/', checkAuthenticated, indexController);

// user routes
router.get('/users/add', addUser);
router.get('/users/get/:username', getUserByUsername);
router.get('/users/getAll', getAllUsers);
router.get('/users/edit/:username', editUser);
router.get('/users/delete/:username', deleteUser);
router.get('/users/deleteAll', deleteAllUsers);

// Authentication routes
router.get('/auth/register', checkNotAuthenticated, RegisterView);
router.post('/auth/register', checkNotAuthenticated, Register);

router.get('/auth/login', checkNotAuthenticated, LoginView);
router.post('/auth/login', checkNotAuthenticated, Login);

router.get('/auth/logout', checkAuthenticated, Logout);


// 404 error
app.use(error404);
app.use(view404);


export default router;
