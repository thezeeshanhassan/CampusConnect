const mongoose = require('mongoose');
const passportLocalMongoose = require(`passport-local-mongoose`);

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,

    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    communities: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Community'
        }
    ]
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
