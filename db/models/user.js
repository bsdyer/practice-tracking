// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('User', new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    role: String,
    teacher: String,
    token: String
}));
