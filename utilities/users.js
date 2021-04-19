// Users model
import User from '../App/Models/usersSchema';

async function getUserById(id) {
    const user = await User.findOne({ _id: id });
    return user;
};


async function getUserByUsername(username) {
    const user = await User.findOne({ username: username });
    return user;
};


export { getUserById, getUserByUsername };