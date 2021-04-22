import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const options = { timestamps: true }

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
    }
}, options);

const tableName = 'users';
const User = mongoose.model(tableName, userSchema)

// User model operations
async function addUser(username, password, fullName) {
    const user = new User({
        username: username,
        password: password,
        fullName: fullName
    });

    const result = await user.save();
    return result;
};

async function getAllUsers() {
    const users = await User.find().sort({ createdAt: -1 });
    return users;
};


async function getUserById(id) {
    const user = await User.findOne({ _id: id });
    return user;
};


async function getUserByUsername(username) {
    const user = await User.findOne({ username: username });
    return user;
};

async function editUser(username, updates) {
    const result = await User.updateOne({ username: username }, updates);
    return result;
};


async function deleteUserById(id) {
    const result = await User.deleteOne({ _id: id });
    return result;
};

async function deleteUserByUsername(username) {
    const result = await User.deleteOne({ username: username });
    return result;
};

async function deleteAllUsers() {
    const result = await User.deleteMany({});
    return result;
};


export { User, addUser, getAllUsers, getUserByUsername, getUserById, editUser, deleteUserById, deleteUserByUsername, deleteAllUsers };


