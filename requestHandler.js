/**
 * 请求处理函数
 * @return {Function} 返回所有处理函数
 */

function start(){
	console.log('Request handler "start" was called');
}

function update(){
	console.log('Request handler "update" was called');
}

exports.start = start;
exports.update = update;