

// 启动了子线程的模块 - 给每一个启动的都形成了子线程去处理 
var exec = require("child_process").exec;
var fs = require("fs");

function start(response,postData){

    // // 使用回调函数进行处理 --> 
    // console.log("start do somethings");
    // exec("ls -lah", function (error, stdout, stderr) { 
    //     response.writeHead(200, {"Content-Type": "text/plain"});
    //     response.write(stdout);
    //     response.end();
    // });
    // // wait for 10000 seconds is ok
    var body = '<html>'+
    '<head>'+
    '<meta http-equiv="Content-Type" content="text/html; '+ 
    'charset=UTF-8" />'+
    '<link rel="stylesheet" href="http://apps.bdimg.com/libs/bootstrap/3.3.0/css/bootstrap.min.css"> ' +  
    '<script src="http://apps.bdimg.com/libs/jquery/2.1.1/jquery.min.js"> '+
    '</script>'+
    '<script src="http://apps.bdimg.com/libs/bootstrap/3.3.0/js/bootstrap.min.js"> '+ 
    '</script>' +
    '</head>'+

    '<body>'+
    '<form action="/upload" method="post">'+
    '<textarea name="text" rows="20" cols="60"></textarea>'+ 
    '<input type="submit" value="Submit text" />'+ '</form>'+
    '</body>'+
    '</html>';
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}

function upload(response, postData){
   console.log("Request handler 'upload' was called."); 
   response.writeHead(200, {"Content-Type": "text/plain"}); 
   response.write("Hello Upload");
   response.write(postData);
   response.end();
}

// 进行展现的模块
function show(response, postData) {
  console.log("Request handler 'show' was called.");
  fs.readFile("1.jpg", "binary", function(error, file) {
    if(error) {
      response.writeHead(500, {"Content-Type": "text/plain"});
      response.write(error + "\n");
      response.end();
    } else {
      response.writeHead(200, {"Content-Type": "image/png"});
      response.write(file, "binary");
      response.end();
    }
  });
}

exports.start = start;
exports.upload = upload;
exports.show = show;

