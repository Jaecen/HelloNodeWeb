var http = require('http');
var querystring = require('querystring');

var serviceHostname = 'hunter.cardnex.us';
var serviceUsername = 'auth';
var servicePassword = '0r1z3d';

exports.getCardsForSet = (function(setName, setLoaded) {
	var serviceOptions = {
		hostname: serviceHostname,
		path: '/sets/' + querystring.escape(setName),
		auth: serviceUsername + ':' + servicePassword
	};

	http.get(serviceOptions, function(res) {
		var responseData = '';

		res.on('data', function(chunk) {
			responseData += chunk;
		});

		res.on('end', function() {
			var setData = JSON.parse(responseData);
			setLoaded(setData);
		});
	});
});
