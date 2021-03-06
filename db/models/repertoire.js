// get an instance of mongoose and mongoose.Schema
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
module.exports = mongoose.model('Repertoire', new Schema({
    slug: String,
    composer: String,
    name: String,
    comments: String,
    imagePath: String,
    current: Boolean
}));
