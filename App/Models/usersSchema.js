import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const options = { timestamps: true }

const usersSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique : true
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
const User = mongoose.model(tableName, usersSchema)


export default User;
