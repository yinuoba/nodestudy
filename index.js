/**
 * 入口文件
 * @type {[type]}
 */
var server = require('./server');
var router = require('./router');
var requestHandler = require('./requestHandler');

var handle = {};
// url->function 键值对
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/update'] = requestHandler.update;

// 创建http服务器，处理url请求
server.start(router.route, handle);
