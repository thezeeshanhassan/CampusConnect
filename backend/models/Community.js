const mongoose = require('mongoose');
// Community Schema
const communitySchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    admins: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Reference to User schema for admins
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    pinnedPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }], // Separate field for pinned posts
    pricing: Number,
    displayPicture: { type: String, default: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg' },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Community', communitySchema);
