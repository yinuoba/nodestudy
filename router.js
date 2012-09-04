/**
 * url路由方法
 * @param  {Object} handle   装载各个路径处理函数的对象
 * @param  {String} pathname url路径
 * @return {Function} 返回路由方法
 */
function route(handle, pathname){
    console.log('About to route a request for' + pathname);
    // 如果某路径对应了函数，则执行
    if(typeof handle[pathname] === 'function'){
    	handle[pathname]();
    }else{
    	console.log('No request handle for ' + pathname);
    }
};
exports.route = route;
