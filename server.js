/**
 * 创建http服务器，处理http请求
 */

// 引入http模块
var fclub_server = require('http');

// 引入url模块
var url = require('url');

var start = function(route, handle){
    // 定义创建http服务器时的回调函数，每个请求都将执行这一回调
    function onRequest(req, res){

       // 获取尾路径
       var pathname = url.parse(req.url).pathname;
       console.log('request for' + pathname + 'has recevied!');	

       // 处理相应url的请求
       route(handle,pathname);

       // 发送http的状态码和内容类型
       res.writeHead(200, {'Content-Type': 'text/plain'});
       // 往http相应主体中发送文本
       res.write('the fclub_server has created');
       // 完成响应
       res.end();
    };
    // 创建http服务器，并设置监听端口
    fclub_server.createServer(onRequest).listen(8080);

    // 创建完服务器后往终端输出文本
    console.log('the server has started!');
};
// 返回start，供外部调用
exports.start = start;


