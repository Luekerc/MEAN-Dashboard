var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	hours: {
		type: String,
		required: true
	},
	breaks: {
		type: String,
		required: false
	},
	problems: {
		type: String,
		required: false
	}
});

module.exports = MovieSchema;