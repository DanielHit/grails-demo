var http = require("http");
var url = require("url");

function start (route, handler) {
    function onRequest(request, response){

        console.log("request has get");
        var pathName = url.parse(request.url).pathname;
        console.log("redirect to " + pathName);
        
        var result = route(handler, pathName);    // 真正处理的函数 

        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello world");
        response.write(result);
        response.end();
    }

    http.createServer(onRequest).listen(8080);
    console.log("server start");
}

exports.start = start;