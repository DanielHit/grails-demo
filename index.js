var server = require('./server');   // 增加 服务端处理
var route = require('./route');     // 增加 路由处理
var requestHandlers = require('./requestHandlers');

var handler = {} // 这是命名数组吗？
handler["/"] = requestHandlers.stat;
handler["/start"] = requestHandlers.start;
handler["/upload"] = requestHandlers.upload;

// 传递一个数组进入，然后进行相应的处理
server.start(route.route, handler);
