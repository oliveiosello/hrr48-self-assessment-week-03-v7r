var url = require('url');
var http = require('http');
var path = require('path');

var globalCounter = {};

var server = http.createServer(function(request, response) {
  var endpoint = url.parse(request.url, true).pathname;
  var property = endpoint.replace(/^\//, '');

  if (request.method === 'POST') {
    // determine if property doesn't exist
    if (!globalCounter[property]) {
      //   create property set value to one
      globalCounter[property] = 1;
      // end respons
      response.end()
      // otherwise
    } else {
      // increase value by 1
      globalCounter[property]++;
      // end response
      response.end()
    }
  } else if (request.method === 'GET' && globalCounter[property]) {
    // determine if property exists
      // end response, return property
      response.end(globalCounter[property].toString())
  } else {
    response.statusCode = 404;
    response.end();
  }
});

// Do not edit this line
module.exports = server;
