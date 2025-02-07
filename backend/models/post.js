const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        default: "General",
    },
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    timestamp: {
        type: Date,
        default: Date.now,
    },
    attachments: [
        {
            type: {
                type: String,
                enum: ["image", "video", "link", "gif"],
            },
            url: {
                type: String,
            },
        },
    ],
    likes: {
        type: Number,
        default: 0,
    },
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
            text: { type: String, required: true },
            timestamp: { type: Date, default: Date.now },
        }
    ],
});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
