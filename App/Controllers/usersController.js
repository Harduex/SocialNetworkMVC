// Users model
import User from '../Models/usersSchema';

const addUser = (req, res) => {

    const user = new User({
        username: req.query.username,
        password: req.query.password,
        fullName: req.query.fullName
    });

    user.save()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });

};

const getAllUsers = (req, res) => {
    User.find()
        .sort({ createdAt: -1 })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });

};

const getUserByUsername = (req, res) => {
    const username = req.params.username;

    User.findOne({ username: username })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });

};


const editUser = (req, res) => {
    const username = req.params.username;
    const updates = {
        fullName: req.query.fullName
    }

    User.updateOne({ username: username }, updates)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });
};

const deleteUser = (req, res) => {

    const username = req.params.username;

    User.deleteOne({ username: username })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });

};

const deleteAllUsers = (req, res) => {

    User.deleteMany({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            res.send(err);
        });

};


export { addUser, getAllUsers, getUserByUsername, editUser, deleteUser, deleteAllUsers };