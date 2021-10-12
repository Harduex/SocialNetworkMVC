import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const options = { timestamps: true }

import { User } from '../Models/userModel.js';


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
    // likes: {
    //     type: Array,
    // },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: User
    }],
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
        .populate('user', 'username profilePic')
        .sort({ createdAt: -1 });
    return posts;
};


async function getPostById(id) {
    const post = await Post
        .findOne({ _id: id })
        .populate('user', 'username profilePic')
        .populate('comments.user', 'username profilePic')
    return post;
};

async function getPostByIdFull(id) {
    const post = await Post
        .findOne({ _id: id })
        .populate('user', 'username profilePic')
        .populate('comments.user', 'username profilePic')
        .populate('likes', 'username fullName profilePic coverColor');
    return post;
};


async function getAllPostsByUser(user, limit = 1000, skip = 0) {
    const post = await Post
        .find({ user: user._id })
        .populate('user', 'username profilePic')
        .populate('comments.user', 'username profilePic')
        .limit(limit)
        .skip(skip)
        .sort({ createdAt: -1 });

    return post;
};

async function getPostsCount(user) {
    const postsCount = await Post
        .countDocuments({ user: user._id });

    return postsCount;
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

async function deletePostComment(postId, commentId) {
    const result = await Post.updateOne(
        { _id: postId },
        { $pull: { comments: { _id: commentId } } }
    );
    return result;
};

async function deleteAllPosts() {
    const result = await Post.deleteMany({});
    return result;
};

async function getPostsByArray(arr, count = 1000, skip = 0) {
    const posts = await Post
        .find({ 'user': { $in: arr } })
        .populate('user', 'username profilePic')
        .populate('comments.user', 'username profilePic')
        .limit(count)
        .skip(skip)
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

async function editPostComment(postId, comment, commentId) {

    const result = await Post.updateOne(
        { _id: postId, "comments._id": commentId },
        {
            $set: {
                "comments.$.comment": comment,
            }
        }
    );
    return result;
};

async function searchPosts(keyword) {
    let regex = new RegExp(keyword, 'i');

    const result = await Post
        .find({ body: regex })
        .populate('user', 'username profilePic')
        .populate('comments.user', 'username profilePic')
        .sort({ createdAt: -1 });

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
    getPostByIdFull,
    deletePostComment,
    getPostsCount,
    editPostComment,
    searchPosts,
};


