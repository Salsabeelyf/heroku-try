var http = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('Hello from heroku');
    res.end();
}).listen(process.env.PORT || 8080);
