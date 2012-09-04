var fclub_server = require('http');
var url = require('url');
var start = function(route, handle){
    function onRequest(req, res){

       var pathname = url.parse(req.url).pathname;
       console.log('request for' + pathname + 'has recevied!');	
       route(handle,pathname);

       res.writeHead(200, {'Content-Type': 'text/plain'});
       res.write('the fclub_server has created');
       res.end();
    };
    fclub_server.createServer(onRequest).listen(8080);
    console.log('the server has started!');
};
exports.start = start;


