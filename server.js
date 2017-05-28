//require is a built in nodejs method with a built in module that can be:
//part of core, in which case we do nothing (http);
//from the npm store written by someone else. require a look inside of node_module;
// a module we wrote which requires a path

var http = require("http");
// console.log(http);
var server = http.createServer(function(request, response){
	// console.log(request);
	response.writeHead(200, {
		'content-type': 'text/html'
	});
	response.write("<h1>Hello, Visitor. This is YOUR node server.</h1>");
	response.end;
});

//server is created above. it came from http object(createServer method). includes request and response call back.
// also has a listen method.
server.listen(8000);
console.log('nodejs is listening to port 8000 ...');