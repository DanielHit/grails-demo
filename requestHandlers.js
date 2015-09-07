

// 启动了子线程的模块 - 给每一个启动的都形成了子线程去处理 
var exec = require("child_process").exec;


function start(response){

    // 使用回调函数进行处理 --> 
    console.log("start do somethings");
    exec("ls -lah", function (error, stdout, stderr) { 
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write(stdout);
        response.end();
    });
    // wait for 10000 seconds is ok
}

function upload(response){
   console.log("Request handler 'upload' was called."); 
   response.writeHead(200, {"Content-Type": "text/plain"}); 
   response.write("Hello Upload");
   response.end();
}

exports.start = start;
exports.upload = upload;

