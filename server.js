var http = require("http");
var url = require("url");

var formidable = require('formidable'), http = require('http'),
sys = require('sys');

function start (route, handler) {
    function onRequest(request, response){

        var postData = "";
    
        var pathName = url.parse(request.url).pathname;
        console.log("redirect to " + pathName);
        // 解码器是 utf8 
        request.setEncoding("utf8");
        // 事件驱动 --> 监听相关的代码

        request.addListener("data", function(postDataChunk) { postData += postDataChunk;
        console.log("Received POST data chunk '"+ postDataChunk + "'.");
        });

        // 事件驱动 --> 监听相应的end事件 -->
        request.addListener("end", function() { route(handler, pathName, response, postData);
        });

        // // 处理的数据进行传递 --> 设置相应的函数 
        // route(handler, pathName, response, postData);    // 真正处理的函数 
    }

    http.createServer(onRequest).listen(8080);
    console.log("server start");
    
}

exports.start = start;