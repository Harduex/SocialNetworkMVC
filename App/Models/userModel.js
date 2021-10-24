import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const options = { timestamps: true }

import { Post } from '../Models/postModel.js';
import random from 'mongoose-simple-random';


// User schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    profilePic: {
        type: Object,
        required: true
    },
    bio: {
        type: String,
    },
    followers: {
        type: Array
    },
    following: {
        type: Array
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: Post
    }],
    coverColor: {
        type: String
    },
}, options);

userSchema.plugin(random);

const tableName = 'users';
const User = mongoose.model(tableName, userSchema)

// Users model operations
async function addUser(username, password, fullName, email, bio, profilePic) {
    const user = new User({
        username: username,
        password: password,
        fullName: fullName,
        email: email,
        bio: bio,
        profilePic: profilePic
    });

    const result = await user.save();
    return result;
};

async function follow(id, follower) {
    const update1 = await User.updateOne(
        { _id: id },
        { $push: { followers: follower } }
    );
    const update2 = await User.updateOne(
        { _id: follower },
        { $push: { following: id } }
    );
    return [update1, update2];
};

async function unfollow(id, follower) {

    const update1 = await User.updateOne(
        { _id: id },
        { $pull: { followers: follower } }
    );
    const update2 = await User.updateOne(
        { _id: follower },
        { $pull: { following: id } }
    );
    return [update1, update2];
};

async function getAllUsers() {
    const users = await User
        .find()
        .sort({ createdAt: -1 });
    return users;
};


async function getUserById(id) {
    const user = await User.findOne({ _id: id })
    return user;
};


async function getUserByUsername(username) {
    const user = await User.findOne({ username: username })
    return user;
};

async function getUsersByArray(arr) {
    const user = await User.find({ '_id': { $in: arr } });
    return user;
};

async function editUser(id, updates) {
    const result = await User
        .updateOne({ _id: id }, updates);
    return result;
};


async function deleteUserById(id) {
    const result = await User
        .deleteOne({ _id: id });
    return result;
};

async function deleteUserByUsername(username) {
    const result = await User
        .deleteOne({ username: username });
    return result;
};

async function deleteAllUsers() {
    const result = await User
        .deleteMany({});
    return result;
};

async function searchUser(keyword, fields) {
    let regex = new RegExp(keyword, 'i');

    const result = await User
        .find({ $and: [{ $or: [{ username: regex }, { fullName: regex }] }] }, fields);

    return result;
};

async function getRandomUser() {
    const numItems = await User.estimatedDocumentCount()
    const rand = Math.floor(Math.random() * numItems)
    const randomItem = await User.findOne().skip(rand)

    return randomItem;
}

async function getRandomUsersArray(maxLength) {
    let result = [];

    for (let i = 0; i < maxLength; i++) {
        let item = await getRandomUser();
        result.push(item._id);
    }

    result = [...new Set(result)];
    result = await getUsersByArray(result);

    return result;
}


export {
    User,
    addUser,
    getAllUsers,
    getUserByUsername,
    getUserById,
    editUser,
    deleteUserById,
    deleteUserByUsername,
    deleteAllUsers,
    follow,
    unfollow,
    getUsersByArray,
    searchUser,
    getRandomUsersArray,
};