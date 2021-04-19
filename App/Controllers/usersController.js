// Users model
import {
    addUser as add,
    getAllUsers as getAll,
    getUserByUsername as getByUsername,
    editUser as edit,
    deleteUserByUsername as remove,
    deleteAllUsers as removeAll
} from '../Models/usersModel';

import bcrypt from 'bcrypt';


const addUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.query.password, 10);

    add(req.query.username, hashedPassword, req.query.fullName)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
};

const getAllUsers = (req, res) => {
    getAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
};

const getUserByUsername = (req, res) => {
    getByUsername(req.params.username)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
};

const editUser = (req, res) => {
    const username = req.params.username;
    const updates = req.query;

    edit(username, updates)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
};

const deleteUser = (req, res) => {
    remove(req.params.username)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
};

const deleteAllUsers = (req, res) => {
    removeAll()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
};


export { addUser, getAllUsers, getUserByUsername, editUser, deleteUser, deleteAllUsers };