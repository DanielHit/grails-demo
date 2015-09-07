var http = require("http");

function start () {
    function onRequest(request, response){
        console.log("request has get");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("hello world");
        response.end();
    }

    http.createServer(onRequest).listen(8080);
    console.log("server start");
}

exports.start = start;