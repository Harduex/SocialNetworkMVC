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
    },
    email: {
        type: String,
        required: true
    },
    profilePic: {
        type: Buffer,
        required: true,
        default: '/9j/2wBDAA0JCgsKCA0LCgsODg0PEyAVExISEyccHhcgLikxMC4pLSwzOko+MzZGNywtQFdBRkxOUlNSMj5aYVpQYEpRUk//2wBDAQ4ODhMREyYVFSZPNS01T09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0//wgARCAHCAcIDAREAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAEDBAIF/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAB9sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgpODkkk7LDsAAAAAAAAAAAAAAAAAAAAAAA4MxSAAACToFxpAAAAAAAAAAAAAAAAAAAABlM4AAAAAANRoAAAAAAAAAAAAAAAAAAABjKQAAAAAADo2nYAAAAAAAAAAAAAAAAAAIPOAAAAAAAAOj0AAAAAAAAAAAAAAAAAAAUmMAAAAAAAAGk0gAAAAAAAAAAAAAAAAAGQoAAAAAAAAB2bwAAAAAAAAAAAAAAAAADAcAAAAAAAAA7N4AAAAAAAAAAAAAAAAAB5oLC4zgsKQAADWQUnBB2bwAAAAAAAAAAAAAAAAADziC89MgoLTkzlBUQdGwqNx2ZTzzs3gAAAAAAAAAAAAAAAAAGErNJ6IAABBSVHRpBJSeWdm8AAAAAAAAAAAAAAAAAAymc3msAAAAAAHJ45YbgAAAAAAAAAAAAAAAAACgyHqFwAAAAAAB4xcawAAAAAAAAAAAAAAAAADgwHsHQAAAAAAB5RaaAAAAAAAAAAAAAAAAAASDzj1yQAAAAAADyzUdkAAAAAAAAAAAAAAAAAFh2ecegdAAAAAAAHlnpEFQAAAAAAAAAAAAAAAABYWGcsLAAAAAAADIaysrAAAAAAAAAAAAAAAAALCwHB2AAAAAAAcnRWVgAAAAAAAAAAAAAAAAHRcAAAAAAAAACo4AAAAAAAAAAAAAAAAABcdAAAAAAAAA5KQAAAAAAAAAAAAAAAAADstAAAAAAAABWVgAAAAAAAAAAAAAAAAAHRcAAAAAAAACo4AAAAAAAAAAAAAAAAAAJLwAAAAAAAAUnIAAAAAAAAAAAAAAAAAALCwAAAAAAAFZwQAAAAAAAAAAAAAAAAAAAXkgAAAAAAFBAAAAAAAAAAAAAAAAAAAALTsAAAAAAHJSAAAAAAAAAAAAAAAAAAAAdFwAAAAAAKTkAAAAAAAAAAAAAAAAAAAAFp2AAAAADkpAAAAAAAAAAAAAAAAAAAAAOi4AAAAAFJyAAAAAAAAAAAAAAAAAAAAACwsAAAABwVAAAAAAAAAAAAAAAAAAAAAAElxIAAAIKSAAAAAAAAAAAAAAAAAAAAAAdEgsJAAAKiTggAAAAAAAAAAAAAAAAAAAAAgsIJLCQAQVg6KDoAAAAAAAAAAAAAAAAAAAAGE9A6IAOiQQcgHRmKTUAAAAAAAAAAAAAAAAAAADIZj3CsAAAAAkHhnoF4AAAAAAAAAAAAAAAAAAKDzzWeocAAAAAEnR4pWemdgAAAAAAAAAAAAAAAAEGcxEHom4g5AJAAAJJPLMh2bS8AAAAAAAAAAAAAAA5KCgpIAPWNIOQAAAAdAwHngEl5oLiQAAAAAAAAAAAUlJSVAAAHtFoIAAAABIMh5YAABcXF5YAAAAAAAAVFJSVEAAAAA906AIAAAJABmPJAAAABJcXF52AAAAADMYQAAAAAAe6dAzlp2AACkktBnPIAAAAAAJPRLQAAAAQeUQAAAAAAD2C84KTzD0i8gggzmE9UtOjEeaAAAAAAC09IAAAAGcwAAAAAgkAHomwg7MZ5gABJ65ecHR5hkABBIAAAAPUOwAAADEZQAAAAQSAC49c6BB4IABrPUAKzxjkAEEgAAAA3GkAAAA84pAAAABBIAB7BeAeUZQCT2S0AxHmgAEEgAAAA1mwAAAA8wrAAAAIJAABoPXAM55ABqPVAOTxTgAAgkAAAAGk3AAAAHlnAAAABBSWnQAB7RaDKeUAaD1wDIeWAAVnBeAAAADQbwAD/8QAKBAAAgECBAYDAQEBAAAAAAAAAQIDADAQERJQBCAxMjNAEyEiI2CQ/9oACAEBAAEFAv8AiiSBRlFfKa+Rq+Rq+WvlFa13BmC0ZCbWpq1NSybW0l+JtpdszfByIYHZz9D0R9HZpT+fSjbZpe70l7tlb7b0l7tnQamMLCiCKHVo2WwiK6mFqKMMV7tni8mBiU0oyDIrUYKMbjEHI/ErDS8ZVgwqcfil7tlf6eoB++cgGjEhowUiunJL46Xu2WXuqAfm832tJ37LL0qL6jvnrF3bKwzWh0vyeSLpsxGTehL5EH52RcJhkw6XyNUoGVNsi4TDNE7L8Q+6bZFxQZLfAyFNsg9U7KPTOzL19JtmHX0m67weuzavRz/0S3z02kXz12pbp2wXTtq2z/ph1PWyaG2xtqJ62hTNlJtUsmdRLpj5M6zrOs+QVxI/EUme0yvSDU91xqWo31DZpH0iuHH9L0gykByKNqGxkgU0wFE5muGH1e4gf0pWKlZVOwFgKMwoyseXh/Fe4rkBIoTNQlU0CD7JkUUZqLsbEXjvcT4+cSMKE1CRT6TSKtGajIxuL23p/FaBIoStQmpWDXZXyvr24PKEpWDDmeQJSSB8Z/FejfULROQJzN6E5xUTTprUFkaOYNWpa1pXyJXyx1JPQBdlXSAcOJP4vRtpe1Mfxf4Y/RoDCePMcoGZij0CiMOIOcl9DmlmfuvxNpfLE/Y5eHXN8T+aJzN+Dtsy+S0OaJtSYzppfEfZjXQuPENkPQg62X77J6c0L6Hxm8WPD+TEnIO2puU9LUHfZfvsnpQ5o/HhxHixg8uPEePlNyHv5f/EABQRAQAAAAAAAAAAAAAAAAAAALD/2gAIAQMBAT8BSx//xAAUEQEAAAAAAAAAAAAAAAAAAACw/9oACAECAQE/AUsf/8QAKRAAAQIFAwMEAwEAAAAAAAAAAQARITAxQFAQIFECYXESMkGBIpCRYP/aAAgBAQAGPwL9KMVBU1oqKuR4lVVV+WLhPbE9rB/9oxzIwxsxiGUIqKjJ4KhFe06jEDXhMVEKBVNj9JTsnGj6DDHTxIiqKBXwRsOgxBM86DEDLnQWBRzBQxAsCO+I8IeLA9WJawb9pBak1j80xbCiE1+F6TifSEBOI0Y1w7CunieQnGFioRTnQmf9aOuMBEqEVxadJ2QUYrhQuaqAVZHT4n/ciqiFWzgFWYJ5lwK5UQoTWE8bHG+KhqZ/eW6eeNnBUYFe4f1e4L3Be4Juj+rumGoF15sD07PUK7mC77G4sAZQFgDKfjY6e6Nj32P8HYybZ6ebEyjY9jsMhynuzZdPjeNn3cf/xAAqEAEAAQIFBAICAgMBAAAAAAABEQAxECEwUFEgQWFxQKGBkdHhkMHxsf/aAAgBAQABPyH/AAo3QFAsWnsCvV+q9VC7ijuIoT+VXtt92c+KtWTRFLNebXm0sx+21KBLTOWU51+5/G0s52fAgB2peBz2dyvB8JwvnZ4Icvw/9dszkHB8P72zOV5+H97ZW2MK2JrtiiMBPdAQKDmrgScmhkbJvFCuKXLE+9srbp6CQk1bj8KQ0mO9csclf3dXxvqrXwiWJOKco00RuR4xASeBw+9sxwEkuGhYA+64B6oO7+Sl8vAmj1FQTMZ4CcP72zHI8mHuDriByYGdmDleHAfZ+AIRw0L+DZolgYLx8Ax7aOZsoS5UkXqYPNFvgfbqMqRL7J30klZpzWdvHwPIlIFWGyXuEq981Z/gad/MGHbslzjA8MvgEY7YduyKH4rl2VyfDcG8l2zWt5C58O9s54fBfHaTM3lZRruNqKHXc7WUkarg2xQzquXbV203BG3GVDJouVLLO2iaXKGGhnQU0b7ZappZy91cwGKGelYpZwvr8lltcn/uqI97tN+gWCFK6LqlHNVw59naf9615TdUvXlUw4wfez8wPrCaXDBvpmHuqkC4UM5fubIBmCrFlSNccPdmMHTMIpc4I2/VXX9qESRn59jCi2NLU/hSqys9AgeVdcZew6EJSUTspfJpcA/IULsVyz1S/wA9X9/jQEFrhkeOsZWrlnuh/jqxfv8ACQhZeCv7WuGeqVbs6YgPBrn6tO4BQ7p7UPdPVXZ+NXz9vrqU8GLcIr4qfM9Zfc8FFzLK44v6tYUZMmrnZfTBF2pEV3X9BIw7BWWd+zWQlCsmj9Thr/t1/wB/AhO60i913qHC1SYRch14B7OTpxQ5affp9azpRXccOCl/PUgBK0HnXcIMyhkr1h8D0RpL0DTOngxyaO5xEhyVEZdPifRyntL0zq6z099NSzh0nPg07Dqj1syejKP9vQEBdoRP56I03u9dT203k6X39K513Dgehx0bj3HoBrBSO+/Vc07nrS+zpXqF50mXPZrPJqXnT/8APq//2gAMAwEAAgADAAAAEJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJIIIIBJJJJJJJJJJJJJJJJJJJJJJJBJJJJBIJJJJJJJJJJJJJJJJJJJJIBJJJJJJIJJJJJJJJJJJJJJJJJJJJBJJJJJJJBJJJJJJJJJJJJJJJJJJJBJJJJJJJJBJJJJJJJJJJJJJJJJJJIJJJJJJJJJBJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJBJJJJJJJJJJJJJJJJJIJAABJJJAIIJJJJJJJJJJJJJJJJJJIIBJIAJJIJBJJJJJJJJJJJJJJJJJJBIAAABIIBIJJJJJJJJJJJJJJJJJJIJAAAAAAABJJJJJJJJJJJJJJJJJJJBIAAAAAAAIJJJJJJJJJJJJJJJJJJJJAAAAAAABJJJJJJJJJJJJJJJJJJJJIAAAAAAAAJJJJJJJJJJJJJJJJJJABAAAAAAABIJJJJJJJJJJJJJJJJJIBIAAAAAAAAJJJJJJJJJJJJJJJJJJAAAAAAAAAABJJJJJJJJJJJJJJJJJIAAAAAAAAAABJJJJJJJJJJJJJJJJJIAAAAAAAAAJJJJJJJJJJJJJJJJJJJAAAAAAAAAAJJJJJJJJJJJJJJJJJJJAAAAAAAAABJJJJJJJJJJJJJJJJJJIAAAAAAAAAJJJJJJJJJJJJJJJJJJJAAAAAAAABBJJJJJJJJJJJJJJJJJJJIAAAAAAABJJJJJJJJJJJJJJJJJJJIAAAAAAABJJJJJJJJJJJJJJJJJJJJAAAAAAABJJJJJJJJJJJJJJJJJJJJJIAAAAABJJJJJJJJJJJJJJJJJJJJJIAAAAAAJJJJJJJJJJJJJJJJJJJJJJJAAAAAJJJJJJJJJJJJJJJJJJJJJJJAAAAAJJJJJJJJJJJJJJJJJJJJJJJABAAABAJJJJJJJJJJJJJJJJJJJJJJJIAABABJJJJJJJJJJJJJJJJJJJJIAJIJBJIJJJJJJJJJJJJJJJJJJJJIIJJJJJJ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',
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
}, options);

const tableName = 'users';
const User = mongoose.model(tableName, userSchema)

// Users model operations
async function addUser(username, password, fullName, email, bio) {
    const user = new User({
        username: username,
        password: password,
        fullName: fullName,
        email: email,
        bio: bio,
    });

    const result = await user.save();
    return result;
};

async function follow(username, follower) {
    const update1 = await User.updateOne(
        { username: username },
        { $push: { followers: follower } }
    );
    const update2 = await User.updateOne(
        { username: follower },
        { $push: { following: username } }
    );
    return [update1, update2];
};

async function unfollow(username, follower) {

    const update1 = await User.updateOne(
        { username: username },
        { $pull: { followers: follower } }
    );
    const update2 = await User.updateOne(
        { username: follower },
        { $pull: { following: username } }
    );
    return [update1, update2];
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

async function getUsersByArray(arr) {
    const user = await User.find({ 'username': { $in: arr } });
    return user;
};

async function editUser(id, updates) {
    const result = await User.updateOne({ _id: id }, updates);
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
};