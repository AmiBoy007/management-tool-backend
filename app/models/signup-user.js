const mongoose = require('mongoose');

const SignupUserSchema = mongoose.Schema({
    user_name: String,
    email: String,
    password:String
});

module.exports = mongoose.model('SignUpUser', SignupUserSchema);