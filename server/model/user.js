var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new mongoose.Schema({
	name: {type: String},
	_question: {type: Schema.Types.ObjectId, ref: 'questions'}
}, {timestamps: true});

var users = mongoose.model('users', userSchema);



