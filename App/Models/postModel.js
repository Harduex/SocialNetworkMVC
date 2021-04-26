import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const options = { timestamps: true }

import { User } from '../Models/userModel';


// Post model operations
const postSchema = new Schema({
    body: {
        type: String,
    },
    comments: [{
        user: {
            type: Schema.Types.ObjectId,
            ref: User
        },
        comment: {
            type: String,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        }
    }],
    likes: {
        type: Array,
    },
    image: {
        type: Buffer,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User
    }
}, options);

const tableName = 'posts';
const Post = mongoose.model(tableName, postSchema)

// Post model operations
async function addPost(body, user, comments, likes, image) {
    const post = new Post({
        body: body,
        comments: comments,
        likes: likes,
        image: image,
        user: user._id,
    });

    const result = await post.save();
    return result;
};

async function getAllPosts() {
    const posts = await Post
        .find()
        .populate('user', '-password')
        .sort({ createdAt: -1 });
    return posts;
};


async function getPostById(id) {
    const post = await Post
        .findOne({ _id: id })
        .populate('user')
        .populate('comments.user');
    return post;
};

async function getAllPostsByUser(user, count=50) {
    const post = await Post
        .find({ user: user._id })
        .populate('user')
        .populate('comments.user')
        .limit(count)
        .sort({ createdAt: -1 });

    return post;
};


async function editPost(id, updates) {
    const result = await Post
        .updateOne({ _id: id }, updates);
    return result;
};


async function deletePostById(id) {
    const result = await Post.deleteOne({ _id: id });
    return result;
};

async function deleteAllPosts() {
    const result = await Post.deleteMany({});
    return result;
};

async function getPostsByArray(arr) {
    const posts = await Post
        .find({ 'user': { $in: arr } })
        .populate('user')
        .populate('comments.user')
        .sort({ createdAt: -1 });
    return posts;
};

async function likePost(postId, userId) {
    const result = await Post.updateOne(
        { _id: postId },
        { $push: { likes: userId } }
    );
    return result;
};

async function dislikePost(postId, userId) {

    const result = await Post.updateOne(
        { _id: postId },
        { $pull: { likes: userId } }
    );
    return result;
};

async function commentPost(postId, userId, comment) {

    const result = await Post.updateOne(
        { _id: postId },
        { $push: { comments: { user: userId, comment: comment } } }
    );
    return result;
};


export {
    Post,
    addPost,
    getAllPosts,
    getPostById,
    editPost,
    deletePostById,
    deleteAllPosts,
    getAllPostsByUser,
    getPostsByArray,
    likePost,
    dislikePost,
    commentPost,
};


