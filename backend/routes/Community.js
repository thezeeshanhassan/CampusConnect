const express = require('express');
const Community = require('../models/Community')
const router = express.Router();


// Route: Create Communityy
router.post('/create', async (req, res) => {
    try {
        const { name, description, pricing } = req.body;
        const newCommunity = new Community({
            name,
            description,
            pricing,
        });
        await newCommunity.save();
        res.status(201).json({ message: 'Community created successfully', community: newCommunity });
    } catch (error) {
        res.status(500).json({ error: 'Error creating community', details: error.message });
    }
});

// Route: Fetch Communities
router.get('/', async (req, res) => {
    try {
        const communities = await Community.find();
        res.status(200).json(communities);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching communities', details: error.message });
    }
});

// Route: Join Community
router.post('/:id/join', async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user?.id || 'dummyUserId'; // Replace with actual user ID from auth

        const community = await Community.findById(id);
        if (!community) {
            return res.status(404).json({ error: 'Community not found' });
        }

        if (community.members.includes(userId)) {
            return res.status(400).json({ error: 'User already a member of this community' });
        }

        community.members.push(userId);
        await community.save();
        res.status(200).json({ message: 'Joined community successfully', community });
    } catch (error) {
        res.status(500).json({ error: 'Error joining community', details: error.message });
    }
});

router.post('/:id/pin-post', async (req, res) => {
    try {
        const community = await Community.findById(req.params.id);
        if (!community.admins.includes(req.user.id)) {
            return res.status(403).json({ error: 'Only admins can pin posts' });
        }
        community.pinnedPosts.push(req.body.postId);
        await community.save();
        res.status(200).json({ message: 'Post pinned successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error pinning post' });
    }
});

router.get('/:id/pinned-posts', async (req, res) => {
    try {
        const community = await Community.findById(req.params.id).populate('pinnedPosts');
        res.status(200).json({ pinnedPosts: community.pinnedPosts });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pinned posts' });
    }
});

router.get('/:id/posts', async (req, res) => {
    try {
        const community = await Community.findById(req.params.id).populate('posts');
        const regularPosts = community.posts.filter(post => !community.pinnedPosts.includes(post._id));
        res.status(200).json({ posts: regularPosts });
    } catch (error) {
        res.status(500).json({ error: 'Error fetching posts' });
    }
});

module.exports = router;
