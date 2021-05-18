const mongoose = require('mongoose');

const AddProfileSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    contact_number:String,
    address:String,
    dob:String,

});

module.exports = mongoose.model('AddProfile', AddProfileSchema);