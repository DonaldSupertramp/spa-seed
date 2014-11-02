var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ChapterSchema = new Schema({
    title: String,
    date: Date,
    content: String,
    number: Number
});

module.exports = mongoose.model('Chapter', ChapterSchema);