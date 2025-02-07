const express = require("express");
const Post = require("../models/post");
const isLoggedIn = require("../middlewares/auth");
const z = require("zod");

const router = express.Router();

// Zod Validation Schema
const postSchema = z.object({
    title: z.string().min(5, "Title must be at least 5 characters"),
    description: z.string().min(10, "Description must be at least 10 characters"),
    category: z.string().optional(),
    attachments: z.array(
        z.object({
            type: z.enum(["image", "video", "link", "gif"]),
            url: z.string().url("Invalid URL format"),
        })
    ).optional(),
});

// Create a new post
router.post("/create", isLoggedIn, async (req, res) => {
    try {
        const validation = postSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(400).json({ message: "Invalid data", errors: validation.error.issues });
        }

        const { title, description, category, attachments } = req.body;
        const newPost = new Post({ 
            title, 
            description, 
            category, 
            attachments, 
            author: req.userId 
        });

        await newPost.save();
        res.status(200).json({ message: "Post created successfully", post: newPost });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// Get all posts
router.get("/", async (req, res) => {
    try {
        const posts = await Post.find().populate("author", "username email");
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// Get a specific post by ID
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id).populate("author", "username email");
        if (!post) return res.status(404).json({ message: "Post not found" });

        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// Update a post (only the author)
router.put("/:id/edit", isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.author.toString() !== req.userId) {
            return res.status(403).json({ message: "Unauthorized action" });
        }

        const validation = postSchema.safeParse(req.body);
        if (!validation.success) {
            return res.status(500).json({ message: "Invalid data", errors: validation.error.issues });
        }

        const { title, description, category, attachments } = req.body;
        post.title = title;
        post.description = description;
        post.category = category || post.category;
        post.attachments = attachments || post.attachments;

        await post.save();
        res.status(200).json({ message: "Post updated successfully", post });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// Delete a post (only the author)
router.delete("/:id", isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        if (post.author.toString() !== req.userId) {
            return res.status(403).json({ message: "Unauthorized action" });
        }

        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// Like a post
router.put("/:id/like", isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });

        post.likes += 1;
        await post.save();
        res.status(200).json({ message: "Post liked", likes: post.likes });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

// Add comment 
router.put("/:id/comment", isLoggedIn, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).json({ message: "Post not found" });
        console.log(req.body);
        if (!req.body.text || req.body.text.trim() === "") {
            return res.status(400).json({ message: "Comment text is required" });
        }
        
        req.body.text = req.body.text.trim().replace(/\n/g, " ");

        post.comments.push({
            user: req.userId,
            text: req.body.text,
            timestamp: new Date(),
        });

        await post.save();
        res.status(200).json({ message: "Comment added", comments: post.comments });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong", error: error.message });
    }
});

module.exports = router;
