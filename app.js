// include the http module
// inclue fs module. part of core
var http = require('http');
var fs = require('fs');

var server = http.createServer((req, res)=>{
	console.log('someone connected to the server');
	console.log(req.url);
	res.writeHead(200,{'content-type': 'text/html'})	
	if (req.url == '/'){
		var theHomePageHTML = fs.readFileSync('./homePage.html');
		res.end(theHomePageHTML);
	}else{
		res.end('<h1>404 error</h1>')
	}
});


var port = 8000;
server.listen(port);

console.log('server is listening to port 8000 ... ')