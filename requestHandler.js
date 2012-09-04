function start(){
	console.log('Request handler "start" was called');
}

function update(){
	console.log('Request handler "update" was called');
}

exports.start = start;
exports.update = update;