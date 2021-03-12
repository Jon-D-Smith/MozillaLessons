var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//Generate initial schema
var GenreSchema = new Schema({
    name: {type:String, required: true, minlength: 3, maxlength: 100}
})

//Virtual url
GenreSchema
.virtual('url')
.get(function() {
    return '/catalog/genre/' + this._id;
});

//Export the model
module.exports = mongoose.model('Genre', GenreSchema);