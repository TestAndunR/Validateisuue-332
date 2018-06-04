let AWS = require('aws-sdk');
let firebase = require('firebase');
let connectionManager = require('./sigma334.js');
let page = new Page();
exports.handler = function(event, context, callback) {

	console.log(page.name);	
	console.log("Validte sigma 334");
	callback(null,'Successfully executed');
}