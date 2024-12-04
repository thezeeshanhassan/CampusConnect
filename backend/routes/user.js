const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const passportLocalMongoose = require(`passport-local-mongoose`);
const JWT_SECRET = process.env.SESSION_SECRET;

const router = express.Router({ mergeParams: true });


router.get('/', function (req, res) {
    res.send('API is running');
});


router.post('/signup', async (req, res) => {

    const { email, password, fname, lname } = req.body;
    const username = email.split('@')[0];
    // Check if User Exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(411).json({ message: "Email Already Taken" });
    }

    const newUser = new User({ email, fname, lname, password, username });
    console.log(newUser);
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser)

    const userId = registeredUser._id;
    const token = jwt.sign({
        userId
    },
        JWT_SECRET);

    res.status(200).json({
        message: "User created successfully",
        token,
    });

});

router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login' }),
    (req, res) => {
        const user = req.user;

        if (!user) {
            return res.status(411).json({
                message: "User Does Not Exists",
            });
        }

        const userId = user._id;

        const token = jwt.sign({
            userId
        }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Signed In Successfully',
            token,
        });
    });


module.exports = router;