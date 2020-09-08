var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // determine if property exists
    //   if so, increase value by 1
    // else
    // create property set value to one
    // end response
  } else if (request.method === 'GET') {
    // determine if property exists
    // end response, return property
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
