// node-restful takes a mongoose model (Movies.js i.e.) and converts its to a restful API
var restful = require('node-restful');

module.exports = function(app, route) {

// Setup the controller for rest

	var rest = restful.model(
		'movie',
		app.models.movie
		).methods(['get','put', 'post', 'delete']);

// register this endpoint with the application
	rest.register(app, route);

// return middleware
	return function(req, res, next){
		next();
	};

}