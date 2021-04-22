import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const options = { timestamps: true }

// Post model operations
const postSchema = new Schema({
    body: {
        type: String,
    },
    user: {
        type: String,
    },
    comments: {
        type: Array,
    },
    likes: {
        type: Array,
    },
    image: {
        type: Buffer,
    },
}, options);

const tableName = 'posts';
const Post = mongoose.model(tableName, postSchema)

// Post model operations
async function addPost(body, user, comments, likes, image) {
    const post = new Post({
        body: body,
        user: user,
        comments: comments,
        likes: likes,
        image: image,
    });

    const result = await post.save();
    return result;
};

async function getAllPosts() {
    const posts = await Post.find().sort({ createdAt: -1 });
    return posts;
};


async function getPostByUsername(username) {
    const post = await Post.findOne({ user: username });
    return post;
};

async function editPost(id, updates) {
    const result = await User.updateOne({ _id: id }, updates);
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


export { Post, addPost, getAllPosts, getPostByUsername, editPost, deletePostById, deleteAllPosts };


