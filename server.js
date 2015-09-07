var http = require("http");
var url = require("url");

function start (route, handler) {
    function onRequest(request, response){

        console.log("request has get");
        var pathName = url.parse(request.url).pathname;
        console.log("redirect to " + pathName);
        
        route(handler, pathName, response);    // 真正处理的函数 
    }

    http.createServer(onRequest).listen(8080);
    console.log("server start");
}

exports.start = start;