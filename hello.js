    // load the http module --> 加载了http的模块 
　　var http = require('http');
    
    // 插入了回调函数 function(req, res)
　　http.createServer(function (req, res) {
     // response.writeHead--> htpp的头
      
　　  res.writeHead(200, {'Content-Type': 'text/plain'});
 　　 res.end('Hello World 111 \n');

　　}).listen(8080, "127.0.0.1");

　　console.log('Server running at http://127.0.0.1:1337/');
    
