var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var questionSchema = new mongoose.Schema({
	text: {type: String, required:true, min:8},
	_name: {type: Schema.Types.ObjectId, ref: 'users'},
	option_one: {type: String, required:true, min:3},
	vote_one: {type: Number},
	option_two: {type: String, required:true, min:3},
	vote_two: {type: Number},
	option_three: {type: String, required:true, min:3},
	vote_three: {type: Number},
	option_four: {type: String, required:true, min:3},
	vote_four: {type: Number}
}, {timestamps: true});

var questions = mongoose.model('questions', questionSchema)