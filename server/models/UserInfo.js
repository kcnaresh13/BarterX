const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema and model
const UserInfoSchema = new Schema({
    userName: {
        type: String,
        required: [true, 'username is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']

    },
    password: {
        type: String,
        required: [true, 'password is required']

    },
    author: {
        type: String,

    },
    isbnnum: {
        type: String,

    },
    price: {
        type: String,

    },
    descript: {
        type: String,

    },
    photo: {
        type: String,

    }
});const UserInfo = mongoose.model('info', UserInfoSchema);

module.exports = UserInfo;