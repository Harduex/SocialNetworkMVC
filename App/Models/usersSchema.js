import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    }
});

const tableName = 'users';
export default mongoose.model(tableName, usersSchema);
