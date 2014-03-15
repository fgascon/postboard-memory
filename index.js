var postboard = require('postboard');

module.exports = function() {
	var data = {};
	return postboard({
		get: function(key, callback) {
			callback(null, data[key]);
		},
		set: function(key, value, callback) {
			data[key] = value;
			callback();
		},
		'delete': function(key, callback) {
			delete data[key];
			callback();
		}
	});
}; 

