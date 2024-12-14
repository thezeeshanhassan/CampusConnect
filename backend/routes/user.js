const express = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const passport = require('passport')
const passportLocalMongoose = require(`passport-local-mongoose`);
const JWT_SECRET = process.env.SESSION_SECRET;
const z = require('zod');
const isLoggedIn = require('../middlewares/auth');

const router = express.Router({ mergeParams: true });


// ZOD Validation Schemas

const signupSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters" }),
    fname: z.string().min(5, { message: "Firstname must be at least 5 characters" }),
    lname: z.string().optional(),
    username: z.string().min(5, { message: "Username must be at least 3 characters" })
});

const loginSchema = z.object({
    username: z.string().min(5, { message: "Username must be at least 3 characters" }),
    password: z.string().min(6, { message: "Password must be at least 8 characters" })
});


router.get('/', function (req, res) {
    res.send('API is running');
});


router.post('/signup', async (req, res) => {

    const { success } = signupSchema.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs",
        });
    }

    const { email, password, fname, lname, username } = req.body;
    // Check if User Exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(411).json({ message: "Username / Email Already Taken" });
    }

    const newUser = new User({ email, fname, lname, username });
    const registeredUser = await User.register(newUser, password);

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
    passport.authenticate('local', { failureMessage: "Unauthorized User" }),
    (req, res) => {

        const { success } = loginSchema.safeParse(req.body);
        if (!success) {
            return res.status(411).json({
                message: "Incorrect inputs",
            });
        }

        const user = req.user;
        const userId = user._id;

        const token = jwt.sign({
            userId
        }, JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({
            message: 'Signed In Successfully',
            token,
        });
    });


router.get('/profile', isLoggedIn, async (req, res) => {

    const id = req.userId;
    console.log(id);
    const user = await User.findOne({ _id: id });
    console.log(user)
    if (!user) {
        return res.status(404).json({
            message: "User Not Found",
        });
    }

    res.status(200).json({
        user: user,
    });


})


module.exports = router;